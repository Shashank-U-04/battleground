import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { gt } from '../renderer.js';

export function createMapBuilder(scene, world) {
    const L = {
        rings: [],
        spawns: [],
        snipers: [],
        pickups: [],
        animated: [],
        meshes: [],
        playerStart: new THREE.Vector3(),
        bounds: null,
        arenaSpawns: [],
        grappleMovers: [],
        breakables: [],
        props: [],
        style: null
    };

    const geoGroups = {};

    function getGeoGroup(ink, fill) {
        const key = `${ink}_${fill}`;
        if (!geoGroups[key]) geoGroups[key] = [];
        return geoGroups[key];
    }

    const builder = {
        L,
        
        box(x, y, z, w, h, d, opts = {}) {
            const geo = new THREE.BoxGeometry(w, h, d);
            const cx = x;
            const cy = y + h / 2;
            const cz = z;
            
            geo.translate(cx, cy, cz);
            getGeoGroup(opts.ink || 0, !!opts.fill).push(geo);

            if (!opts.noCollide && world) {
                world.addBox(
                    { x: cx - w / 2, y, z: cz - d / 2 },
                    { x: cx + w / 2, y: y + h, z: cz + d / 2 },
                    opts
                );
            }
            return builder;
        },

        slab(x1, z1, x2, z2, y, h, opts = {}) {
            const w = Math.abs(x2 - x1);
            const d = Math.abs(z2 - z1);
            const cx = (x1 + x2) / 2;
            const cz = (z1 + z2) / 2;
            return builder.box(cx, y, cz, w, h, d, opts);
        },

        wallX(x1, x2, z, y, h, d, holes = [], opts = {}) {
            let rects = [{ x1: Math.min(x1, x2), x2: Math.max(x1, x2), y1: y, y2: y + h }];
            
            for (const [hx1, hx2, hy1, hy2] of holes) {
                const nextRects = [];
                for (const r of rects) {
                    if (hx2 <= r.x1 || hx1 >= r.x2 || hy2 <= r.y1 || hy1 >= r.y2) {
                        nextRects.push(r);
                        continue;
                    }
                    if (hx1 > r.x1) nextRects.push({ x1: r.x1, x2: hx1, y1: r.y1, y2: r.y2 });
                    if (hx2 < r.x2) nextRects.push({ x1: hx2, x2: r.x2, y1: r.y1, y2: r.y2 });
                    
                    const cx1 = Math.max(r.x1, hx1);
                    const cx2 = Math.min(r.x2, hx2);
                    if (hy1 > r.y1) nextRects.push({ x1: cx1, x2: cx2, y1: r.y1, y2: hy1 });
                    if (hy2 < r.y2) nextRects.push({ x1: cx1, x2: cx2, y1: hy2, y2: r.y2 });
                }
                rects = nextRects;
            }

            for (const r of rects) {
                builder.box((r.x1 + r.x2) / 2, r.y1, z, r.x2 - r.x1, r.y2 - r.y1, d, opts);
            }
            return builder;
        },

        wallZ(x, z1, z2, y, h, d, holes = [], opts = {}) {
            let rects = [{ z1: Math.min(z1, z2), z2: Math.max(z1, z2), y1: y, y2: y + h }];
            
            for (const [hz1, hz2, hy1, hy2] of holes) {
                const nextRects = [];
                for (const r of rects) {
                    if (hz2 <= r.z1 || hz1 >= r.z2 || hy2 <= r.y1 || hy1 >= r.y2) {
                        nextRects.push(r);
                        continue;
                    }
                    if (hz1 > r.z1) nextRects.push({ z1: r.z1, z2: hz1, y1: r.y1, y2: r.y2 });
                    if (hz2 < r.z2) nextRects.push({ z1: hz2, z2: r.z2, y1: r.y1, y2: r.y2 });
                    
                    const cz1 = Math.max(r.z1, hz1);
                    const cz2 = Math.min(r.z2, hz2);
                    if (hy1 > r.y1) nextRects.push({ z1: cz1, z2: cz2, y1: r.y1, y2: hy1 });
                    if (hy2 < r.y2) nextRects.push({ z1: cz1, z2: cz2, y1: hy2, y2: r.y2 });
                }
                rects = nextRects;
            }

            for (const r of rects) {
                builder.box(x, r.y1, (r.z1 + r.z2) / 2, d, r.y2 - r.y1, r.z2 - r.z1, opts);
            }
            return builder;
        },

        stairs(x, y, z, dir, steps, width, opts = {}) {
            const rise = 1;
            const run = 1.5;
            let cx = x, cz = z;
            
            for (let i = 0; i < steps; i++) {
                const cy = y + i * rise;
                
                let bw = width, bd = run;
                if (dir === '+x' || dir === '-x') {
                    bw = run;
                    bd = width;
                    cx = dir === '+x' ? x + i * run : x - i * run;
                    cz = z;
                } else {
                    cz = dir === '+z' ? z + i * run : z - i * run;
                    cx = x;
                }
                
                builder.box(cx, cy, cz, bw, rise, bd, opts);
            }
            
            return { x: cx, y: y + steps * rise, z: cz };
        },

        rail(x1, z1, x2, z2, y, opts = {}) {
            const w = Math.abs(x2 - x1) || 0.5;
            const d = Math.abs(z2 - z1) || 0.5;
            const cx = (x1 + x2) / 2;
            const cz = (z1 + z2) / 2;
            return builder.box(cx, y, cz, w, 1, d, opts);
        },

        cyl(x, y, z, radius, height, opts = {}) {
            const geo = new THREE.CylinderGeometry(radius, radius, height, opts.seg || 8);
            geo.translate(x, y + height / 2, z);
            getGeoGroup(opts.ink || 0, !!opts.fill).push(geo);

            if (!opts.noCollide && world) {
                world.addBox(
                    { x: x - radius, y, z: z - radius },
                    { x: x + radius, y: y + height, z: z + radius },
                    opts
                );
            }
            return builder;
        },

        sphere(x, y, z, radius, opts = {}) {
            const geo = new THREE.SphereGeometry(radius, opts.seg || 8, opts.seg || 8);
            geo.translate(x, y, z);
            getGeoGroup(opts.ink || 0, !!opts.fill).push(geo);
            return builder;
        },

        ring(x, y, z, axis = 'y') {
            L.rings.push({ x, y, z, axis });
            return builder;
        },

        collider(x, y, z, w, h, d, opts = {}) {
            if (world) {
                world.addBox(
                    { x: x - w / 2, y, z: z - d / 2 },
                    { x: x + w / 2, y: y + h, z: z + d / 2 },
                    opts
                );
            }
            return builder;
        },

        spawn(x, y, z) {
            L.spawns.push(new THREE.Vector3(x, y, z));
            return builder;
        },

        sniper(x, y, z) {
            L.snipers.push(new THREE.Vector3(x, y, z));
            return builder;
        },

        pickup(x, y, z) {
            L.pickups.push(new THREE.Vector3(x, y, z));
            return builder;
        },

        addGeo(geometry, ink = 0, fill = false) {
            getGeoGroup(ink, fill).push(geometry);
            return builder;
        },

        mesh(geometry, ink = 0, fill = false) {
            const m = new THREE.Mesh(geometry, gt(ink, fill));
            scene.add(m);
            L.meshes.push(m);
            return m;
        },

        planes(count, radius, height, opts = {}) {
            for (let i = 0; i < count; i++) {
                const geo = new THREE.ConeGeometry(2, 1, 4);
                const mesh = new THREE.Mesh(geo, gt(opts.ink || 0, !!opts.fill));
                
                const angle = (i / count) * Math.PI * 2;
                mesh.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
                
                mesh.userData = { angle, radius, speed: 0.5 + Math.random() * 0.5 };
                scene.add(mesh);
                L.meshes.push(mesh);
                
                // Track for grappling targeting
                L.grappleMovers.push(mesh);
                
                L.animated.push({
                    mesh,
                    update: (dt) => {
                        mesh.userData.angle += mesh.userData.speed * dt;
                        mesh.position.x = Math.cos(mesh.userData.angle) * mesh.userData.radius;
                        mesh.position.z = Math.sin(mesh.userData.angle) * mesh.userData.radius;
                        mesh.rotation.y = -mesh.userData.angle;
                    }
                });
            }
            return builder;
        },

        birds(count, radius, height, opts = {}) {
            for (let i = 0; i < count; i++) {
                const geo = new THREE.BoxGeometry(1, 0.2, 1);
                const mesh = new THREE.Mesh(geo, gt(opts.ink || 0, !!opts.fill));
                
                const angle = (i / count) * Math.PI * 2;
                mesh.position.set(Math.cos(angle) * radius, height + Math.random() * 5, Math.sin(angle) * radius);
                
                mesh.userData = { angle, radius: radius + Math.random() * 10, speed: 0.2 + Math.random() * 0.3, yOffset: Math.random() * 100 };
                scene.add(mesh);
                L.meshes.push(mesh);
                
                L.animated.push({
                    mesh,
                    update: (dt) => {
                        mesh.userData.angle += mesh.userData.speed * dt;
                        mesh.position.x = Math.cos(mesh.userData.angle) * mesh.userData.radius;
                        mesh.position.z = Math.sin(mesh.userData.angle) * mesh.userData.radius;
                        mesh.position.y = height + Math.sin(mesh.userData.angle * 2 + mesh.userData.yOffset) * 2;
                        mesh.rotation.y = -mesh.userData.angle;
                    }
                });
            }
            return builder;
        },

        finish() {
            for (const key in geoGroups) {
                if (geoGroups[key].length === 0) continue;
                
                const [inkStr, fillStr] = key.split('_');
                const ink = parseInt(inkStr, 10);
                const fill = fillStr === 'true';
                
                const mergedGeo = mergeGeometries(geoGroups[key], false);
                const mesh = new THREE.Mesh(mergedGeo, gt(ink, fill));
                
                scene.add(mesh);
                L.meshes.push(mesh);
            }
            
            return L;
        }
    };

    return builder;
}
