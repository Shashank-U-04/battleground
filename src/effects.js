import * as THREE from 'three';
import { INK } from './renderer.js';

class Particle {
    constructor() {
        this.active = false;
        this.pos = new THREE.Vector3();
        this.vel = new THREE.Vector3();
        this.scale = new THREE.Vector3(1, 1, 1);
        this.rot = new THREE.Quaternion();
        this.life = 0;
        this.maxLife = 1;
        this.ink = 0;
        this.gravity = 0;
        this.drag = 0;
        this.stretch = 0;
        this.alignToVel = false;
        this.isSplat = false;
    }
}

export class Effects {
    constructor(scene) {
        this.scene = scene;
        this.shakeAmt = 0;
        this.shakeOffset = new THREE.Vector3();
        
        this.maxStrokes = 800;
        this.strokes = Array.from({length: this.maxStrokes}, () => new Particle());
        
        this.maxSplats = 200;
        this.splats = Array.from({length: this.maxSplats}, () => new Particle());
        
        this.debrisList = [];

        const mat = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec4 vColorData;
                void main() {
                    vec3 transformed = position;
                    #ifdef USE_INSTANCING
                      transformed = (instanceMatrix * vec4(position, 1.0)).xyz;
                    #endif
                    vec4 mvPosition = viewMatrix * modelMatrix * vec4(transformed, 1.0);
                    #ifdef USE_INSTANCING
                      vColorData = vec4(instanceColor, 1.0);
                    #else
                      vColorData = vec4(1.0);
                    #endif
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec4 vColorData;
                void main() {
                    gl_FragColor = vec4(-1.0, vColorData.r, 0.0, 0.0);
                }
            `
        });

        const boxGeo = new THREE.BoxGeometry(1, 1, 1);
        this.strokesMesh = new THREE.InstancedMesh(boxGeo, mat, this.maxStrokes);
        this.strokesMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.strokesMesh.frustumCulled = false;
        this.scene.add(this.strokesMesh);
        
        const strokeColors = new Float32Array(this.maxStrokes * 3);
        this.strokesMesh.instanceColor = new THREE.InstancedBufferAttribute(strokeColors, 3);

        const splatGeo = new THREE.BoxGeometry(1, 0.1, 1);
        this.splatsMesh = new THREE.InstancedMesh(splatGeo, mat, this.maxSplats);
        this.splatsMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.splatsMesh.frustumCulled = false;
        this.scene.add(this.splatsMesh);
        
        const splatColors = new Float32Array(this.maxSplats * 3);
        this.splatsMesh.instanceColor = new THREE.InstancedBufferAttribute(splatColors, 3);
        
        this.dummy = new THREE.Object3D();
        this.color = new THREE.Color();
    }

    _spawn(poolName, pos, vel, opts = {}) {
        const pool = poolName === 'strokes' ? this.strokes : this.splats;
        const max = poolName === 'strokes' ? this.maxStrokes : this.maxSplats;
        
        let p = null;
        let oldest = pool[0];
        for (let i = 0; i < max; i++) {
            if (!pool[i].active) {
                p = pool[i];
                break;
            }
            if (pool[i].life < oldest.life) oldest = pool[i];
        }
        
        if (!p) p = oldest;

        p.active = true;
        p.pos.copy(pos);
        if (vel) p.vel.copy(vel);
        else p.vel.set(0, 0, 0);
        
        const size = opts.size || 0.1;
        if (size.isVector3) p.scale.copy(size);
        else p.scale.set(size, size, size);

        if (opts.rot) p.rot.copy(opts.rot);
        else p.rot.identity();

        p.life = opts.life || 1;
        p.maxLife = p.life;
        p.ink = opts.ink !== undefined ? opts.ink : 1;
        p.gravity = opts.gravity !== undefined ? opts.gravity : 9.8;
        p.drag = opts.drag !== undefined ? opts.drag : 0;
        p.stretch = opts.stretch || 0;
        p.alignToVel = opts.alignToVel || false;
        p.isSplat = poolName === 'splats';
        
        return p;
    }

    addShake(amt) {
        this.shakeAmt = Math.min(this.shakeAmt + amt, 2.0);
    }

    getShake() {
        return this.shakeOffset;
    }

    update(dt) {
        if (this.shakeAmt > 0.01) {
            this.shakeOffset.set(
                (Math.random() - 0.5) * this.shakeAmt,
                (Math.random() - 0.5) * this.shakeAmt,
                (Math.random() - 0.5) * this.shakeAmt
            );
            this.shakeAmt *= Math.exp(-10 * dt);
        } else {
            this.shakeAmt = 0;
            this.shakeOffset.set(0, 0, 0);
        }

        this._updatePool(this.strokes, this.strokesMesh, dt);
        this._updatePool(this.splats, this.splatsMesh, dt);

        for (let i = this.debrisList.length - 1; i >= 0; i--) {
            const d = this.debrisList[i];
            d.life -= dt;
            if (d.life <= 0) {
                this.scene.remove(d.mesh);
                this.debrisList.splice(i, 1);
                continue;
            }

            d.vel.y -= 9.8 * dt;
            d.pos.addScaledVector(d.vel, dt);
            d.mesh.position.copy(d.pos);

            d.mesh.rotation.x += d.spin.x * dt;
            d.mesh.rotation.y += d.spin.y * dt;
            d.mesh.rotation.z += d.spin.z * dt;
            
            d.vel.multiplyScalar(1 - 2 * dt);

            if (d.blood && Math.random() < 0.2) {
                const vel = new THREE.Vector3((Math.random()-0.5)*2, (Math.random()-0.5)*2, (Math.random()-0.5)*2);
                this.blood(d.pos, vel, 1, { size: d.radius * 0.2, ink: INK.RED });
            }
            
            if (d.life < 0.5) {
                const scale = d.life / 0.5;
                d.mesh.scale.setScalar(Math.max(scale, 0.001));
            }
        }
    }

    _updatePool(pool, mesh, dt) {
        let idx = 0;
        for (let i = 0; i < pool.length; i++) {
            const p = pool[i];
            if (!p.active) continue;

            p.life -= dt;
            if (p.life <= 0) {
                p.active = false;
                continue;
            }

            if (p.drag > 0) p.vel.multiplyScalar(1 - p.drag * dt);
            p.vel.y -= p.gravity * dt;
            p.pos.addScaledVector(p.vel, dt);

            this.dummy.position.copy(p.pos);
            
            if (p.alignToVel && p.vel.lengthSq() > 0.001) {
                const dir = p.vel.clone().normalize();
                this.dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
                if (p.stretch > 0) {
                    this.dummy.scale.set(p.scale.x, p.scale.y, p.scale.z + p.vel.length() * p.stretch);
                } else {
                    this.dummy.scale.copy(p.scale);
                }
            } else {
                this.dummy.quaternion.copy(p.rot);
                this.dummy.scale.copy(p.scale);
                
                if (p.life < 0.5 && !p.isSplat) {
                    const s = p.life / 0.5;
                    this.dummy.scale.multiplyScalar(Math.max(s, 0.01));
                }
            }
            
            this.dummy.updateMatrix();
            mesh.setMatrixAt(idx, this.dummy.matrix);
            
            this.color.setRGB(p.ink, 0, 0);
            mesh.setColorAt(idx, this.color);
            
            idx++;
        }
        
        mesh.count = idx;
        mesh.instanceMatrix.needsUpdate = true;
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }

    sparks(pos, dir, ink, count = 10, speed = 15) {
        for (let i = 0; i < count; i++) {
            const vel = dir.clone().multiplyScalar(speed * (0.5 + Math.random()));
            vel.add(new THREE.Vector3((Math.random()-0.5)*speed*0.5, (Math.random()-0.5)*speed*0.5, (Math.random()-0.5)*speed*0.5));
            this._spawn('strokes', pos, vel, {
                size: 0.05 + Math.random() * 0.05,
                life: 0.2 + Math.random() * 0.3,
                ink: ink,
                gravity: 5,
                drag: 2,
                stretch: 0.02,
                alignToVel: true
            });
        }
    }

    blood(pos, dir, amount = 10, opts = {}) {
        const ink = opts.ink !== undefined ? opts.ink : INK.RED;
        const size = opts.size || 0.15;
        for (let i = 0; i < amount; i++) {
            const speed = 5 + Math.random() * 10;
            const vel = dir.clone().multiplyScalar(speed);
            vel.add(new THREE.Vector3((Math.random()-0.5)*speed*0.8, (Math.random()-0.5)*speed*0.8, (Math.random()-0.5)*speed*0.8));
            this._spawn('strokes', pos, vel, {
                size: size * (0.5 + Math.random()),
                life: 0.5 + Math.random(),
                ink: ink,
                gravity: 15,
                drag: 1,
                stretch: 0.01,
                alignToVel: true
            });
        }
    }

    bloodPool(pos, radius, ink) {
        const rot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * Math.PI * 2);
        this._spawn('splats', pos, new THREE.Vector3(0,0,0), {
            size: new THREE.Vector3(radius, 0.1, radius),
            rot: rot,
            life: 10 + Math.random() * 5,
            ink: ink,
            gravity: 0,
            drag: 0
        });
    }

    bulletImpact(pos, normal, ink) {
        this.sparks(pos, normal, ink, 5, 20);
        
        for (let i = 0; i < 3; i++) {
            const speed = 5 + Math.random() * 10;
            const vel = normal.clone().multiplyScalar(speed);
            vel.add(new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).multiplyScalar(speed));
            
            const rot = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI));
            
            this._spawn('strokes', pos, vel, {
                size: 0.1 + Math.random() * 0.2,
                life: 1 + Math.random(),
                ink: ink,
                gravity: 20,
                drag: 0.5,
                rot: rot,
                alignToVel: false
            });
        }
    }

    strokeBurst(pos, ink, count = 20, speed = 10, opts = {}) {
        for (let i = 0; i < count; i++) {
            const dir = new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize();
            const vel = dir.multiplyScalar(speed * (0.5 + Math.random()));
            this._spawn('strokes', pos, vel, {
                size: opts.size || 0.1,
                life: opts.life || 0.5,
                ink: ink,
                gravity: opts.gravity !== undefined ? opts.gravity : 5,
                drag: opts.drag || 1,
                stretch: opts.stretch || 0,
                alignToVel: opts.alignToVel || false
            });
        }
    }

    explosion(pos, radius, ink) {
        this.addShake(1.5);
        this.strokeBurst(pos, ink, 50, radius * 10, {
            size: 0.2,
            life: 0.8,
            gravity: 0,
            drag: 5,
            stretch: 0.05,
            alignToVel: true
        });
        this._spawn('strokes', pos, new THREE.Vector3(), {
            size: radius * 2,
            life: 0.2,
            ink: ink,
            gravity: 0,
            alignToVel: false
        });
    }

    tracer(from, to, ink, width = 0.05, life = 0.1) {
        const dist = from.distanceTo(to);
        const dir = new THREE.Vector3().subVectors(to, from).normalize();
        const pos = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
        
        const rot = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
        
        this._spawn('strokes', pos, new THREE.Vector3(), {
            size: new THREE.Vector3(width, width, dist),
            life: life,
            ink: ink,
            gravity: 0,
            rot: rot,
            alignToVel: false
        });
    }

    fountain(pos, dir, amount = 1, ink) {
        for (let i = 0; i < amount; i++) {
            const speed = 8 + Math.random() * 4;
            const vel = dir.clone().multiplyScalar(speed);
            vel.add(new THREE.Vector3((Math.random()-0.5)*speed*0.4, Math.random()*speed*0.2, (Math.random()-0.5)*speed*0.4));
            
            this._spawn('strokes', pos, vel, {
                size: 0.1 + Math.random() * 0.1,
                life: 1.0 + Math.random() * 0.5,
                ink: ink,
                gravity: 15,
                drag: 0.5,
                stretch: 0.02,
                alignToVel: true
            });
        }
    }

    debris(object3d, pos, vel, spin, opts = {}) {
        this.scene.add(object3d);
        object3d.position.copy(pos);
        
        this.debrisList.push({
            mesh: object3d,
            pos: pos.clone(),
            vel: vel.clone(),
            spin: spin.clone(),
            life: opts.life || 3,
            maxLife: opts.life || 3,
            blood: opts.blood || false,
            radius: opts.radius || 1
        });
    }

    muzzleFlash(pos, dir, ink) {
        this.sparks(pos, dir, ink, 3, 10);
        this._spawn('strokes', pos, new THREE.Vector3(), {
            size: 0.3,
            life: 0.05,
            ink: ink,
            gravity: 0,
            alignToVel: false
        });
    }
}
