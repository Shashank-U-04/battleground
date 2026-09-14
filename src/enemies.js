import * as THREE from 'three';
import { clamp, damp, rand, randInt, pick, lerpAngle, wrapAngle, TAU, _v1, _v2, _v3, _v4 } from './utils.js';
import { INK, gt, setFill } from './renderer.js';
import { createBody, noShoot } from './physics.js';
import { D } from './audio.js';
import { buildHumanoid, buildBlob, buildFlyer, ENEMY_TYPES } from './enemy-models.js';
import { Projectiles } from './projectiles.js';

export class EnemyManager {
    constructor(ctx) {
        this.ctx = ctx;
        this.scene = ctx.scene;
        this.world = ctx.world;
        this.enemies = [];
        this.alive = 0;
        this.projectiles = new Projectiles(ctx.scene, ctx.world, this);
        this.mods = { speed: 1, damage: 1 };
        this.onKill = null;
        this.onBoss = null;
        this.nextId = 1;
        this.byId = new Map();
    }

    get active() {
        return this.enemies.filter(e => e.alive);
    }

    spawn(type, position, id = null) {
        const config = ENEMY_TYPES[type];
        if (!config) return null;

        const inkMat = gt(config.ink || 1, 1);
        const detailMat = gt(0, 2);

        let modelData;
        if (config.model === 'blob') {
            modelData = buildBlob(inkMat, detailMat, config);
        } else if (config.model === 'flyer') {
            modelData = buildFlyer(inkMat, detailMat, config);
        } else {
            modelData = buildHumanoid(inkMat, detailMat, config);
        }

        const { root, parts, tip, face, hitSpheres } = modelData;

        const rad = config.radius || (0.35 * (config.scale || 1));
        const h = config.height || (1.7 * (config.scale || 1));
        const body = createBody(position.x, position.y, position.z, rad, h, config.mass || 1);
        body.stepHeight = config.stepHeight !== undefined ? config.stepHeight : 0.5;

        const enemy = {
            id: id || this.nextId++,
            type: type,
            T: config,
            mat: inkMat,
            root: root,
            parts: parts,
            J: modelData.J || {},
            tip: tip,
            face: face,
            hit: hitSpheres || [],
            hp: config.hp,
            maxHp: config.hp,
            alive: true,
            state: 'spawn',
            t: 0,
            body: body,
            center: new THREE.Vector3(),
            yaw: 0,
            yawT: 0,
            phase: 0,
            walk: 0,
            aimAmt: 0,
            flinch: 0,
            flashT: 0,
            flashOn: false,
            path: null,
            pathI: 0,
            pathT: 0,
            pathGoal: new THREE.Vector3(),
            losT: 0,
            los: false,
            cool: 2,
            burstLeft: 0,
            burstT: 0,
            aimT: 0,
            attackT: 0,
            attackHit: false,
            stunDur: 0,
            stuckT: 0,
            strafeDir: rand() > 0.5 ? 1 : -1,
            strafeT: 0,
            keepMul: 1,
            deadT: 0,
            fuseT: 0,
            shieldHp: config.shield || 0,
            flyState: 'orbit',
            flyT: 0,
            orbitDir: rand() > 0.5 ? 1 : -1,
            bossAtk: 0,
            target: null
        };

        root.position.copy(position);
        root.scale.setScalar(0.01);
        this.scene.add(root);
        this.enemies.push(enemy);
        this.byId.set(enemy.id, enemy);
        if (enemy.alive) this.alive++;
        
        // effect / sound
        if (this.ctx.effects) {
            this.ctx.effects.burst(position, config.ink || 1, 10);
        }
        D.play('spawn', position, 1);

        return enemy;
    }

    clear() {
        for (const e of this.enemies) {
            this.scene.remove(e.root);
        }
        this.enemies = [];
        this.alive = 0;
        this.byId.clear();
        this.projectiles.clear();
    }

    update(dt) {
        // separate overlapping
        for (let i = 0; i < this.enemies.length; i++) {
            const e1 = this.enemies[i];
            if (!e1.alive || e1.T.model === 'flyer') continue;
            for (let j = i + 1; j < this.enemies.length; j++) {
                const e2 = this.enemies[j];
                if (!e2.alive || e2.T.model === 'flyer') continue;
                
                const dx = e2.body.pos.x - e1.body.pos.x;
                const dz = e2.body.pos.z - e1.body.pos.z;
                const dist2 = dx * dx + dz * dz;
                const rad = e1.T.radius + e2.T.radius;
                
                if (dist2 > 0 && dist2 < rad * rad) {
                    const dist = Math.sqrt(dist2);
                    const push = (rad - dist) * 0.5;
                    const nx = (dx / dist) * push;
                    const nz = (dz / dist) * push;
                    e1.body.pos.x -= nx;
                    e1.body.pos.z -= nz;
                    e2.body.pos.x += nx;
                    e2.body.pos.z += nz;
                }
            }
        }

        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const e = this.enemies[i];
            e.t += dt;

            if (!e.alive) {
                e.deadT += dt;
                
                if (e.J && e.J.root && e.T.model !== 'flyer') {
                    e.J.root.rotation.x = damp(e.J.root.rotation.x, Math.PI/2, 5, dt);
                    e.J.root.position.y = damp(e.J.root.position.y, -e.T.height*0.3, 5, dt);
                }

                if (e.deadT > 8) {
                    e.root.scale.setScalar(clamp(1 - (e.deadT - 8), 0, 1));
                }
                
                if (e.deadT > 9) {
                    this.scene.remove(e.root);
                    this.byId.delete(e.id);
                    this.enemies.splice(i, 1);
                }
                continue;
            }

            if (e.state === 'spawn') {
                const s = clamp(e.t / 0.6, 0, 1);
                e.root.scale.setScalar(s);
                if (s === 1) e.state = 'active';
            }

            e.target = this.ctx.player; 
            let targetPos = _v1.copy(e.target.body.pos);
            let targetCenter = _v2.copy(targetPos);
            targetCenter.y += 1;

            if (e.flashT > 0) {
                e.flashT -= dt;
                if (!e.flashOn) {
                    setFill(e.mat, true);
                    e.flashOn = true;
                }
            } else if (e.flashOn) {
                setFill(e.mat, false);
                e.flashOn = false;
            }

            e.flinch = damp(e.flinch, 0, 10, dt);

            if (e.stunDur > 0) {
                e.stunDur -= dt;
            } else {
                if (e.T.model === 'flyer') {
                    this._thinkFlyer(e, dt, targetPos, targetCenter);
                } else if (e.T.isBoss) {
                    this._thinkBoss(e, dt, targetPos, targetCenter);
                } else if (e.T.weapon === 'blade') {
                    this._thinkBlade(e, dt, targetPos);
                } else {
                    this._think(e, dt, targetPos, targetCenter, e.target);
                }
            }

            if (e.T.model !== 'flyer') {
                e.body.vel.y -= 25 * dt; 
                this.world.moveBody(e.body, dt);
                
                if (e.body.pos.y < -6) {
                    this.kill(e, {point: e.body.pos, dir: new THREE.Vector3(0,-1,0), crit: false});
                }
            }

            e.yaw = lerpAngle(e.yaw, e.yawT, dt * 10);
            e.root.position.copy(e.body.pos);
            
            if (e.T.model === 'flyer') {
                this._animateFlyer(e, dt);
            } else {
                this._animate(e, dt, targetCenter);
            }

            e.center.copy(e.root.position);
            e.center.y += e.T.height * 0.5;

            for (let hi = 0; hi < e.hit.length; hi++) {
                const s = e.hit[hi];
                if (s.bone && s.obj) {
                    s.bone.getWorldPosition(s.obj.position);
                }
            }
        }

        this.projectiles.update(dt);
    }

    _think(e, dt, targetPos, targetCenter, target) {
        e.losT -= dt;
        e.cool -= dt;

        if (e.losT <= 0) {
            e.losT = 0.12 + rand() * 0.05;
            e.center.copy(e.root.position);
            e.center.y += e.T.height * 0.7;
            
            _v3.subVectors(targetCenter, e.center);
            const dist = _v3.length();
            if (dist < e.T.range * 1.5) {
                _v3.divideScalar(dist);
                const hit = this.world.raycast(e.center, _v3, dist, 1);
                e.los = !hit;
            } else {
                e.los = false;
            }
        }

        _v3.subVectors(targetPos, e.root.position);
        const dist = _v3.length();
        _v3.y = 0;
        const dist2d = _v3.length();

        if (dist2d > 0) {
            e.yawT = Math.atan2(_v3.x, _v3.z);
        }

        const maxRange = e.T.range;
        const keepRange = e.T.keep || (maxRange * 0.5);

        e.strafeT -= dt;
        if (e.strafeT <= 0) {
            e.strafeT = 1 + rand() * 2;
            e.strafeDir = rand() > 0.5 ? 1 : -1;
            e.keepMul = 0.8 + rand() * 0.4;
        }

        let speed = e.T.speed * this.mods.speed;

        if (e.los && dist2d < maxRange) {
            e.path = null;
            let moveAmt = 0;
            
            if (dist2d < keepRange * e.keepMul * 0.8) {
                moveAmt = -1; 
            } else if (dist2d > keepRange * e.keepMul * 1.2) {
                moveAmt = 1; 
            }

            const forwardX = Math.sin(e.yawT);
            const forwardZ = Math.cos(e.yawT);
            const rightX = Math.sin(e.yawT + Math.PI/2);
            const rightZ = Math.cos(e.yawT + Math.PI/2);

            let tx = e.root.position.x + forwardX * moveAmt * 2 + rightX * e.strafeDir * 2;
            let tz = e.root.position.z + forwardZ * moveAmt * 2 + rightZ * e.strafeDir * 2;

            if (e.attackT > 0 || e.aimT > 0) speed *= 0.3; 

            this._steer(e, dt, tx, tz, speed, 20);

            if (e.cool <= 0 && e.burstLeft <= 0) {
                if (e.T.weapon === 'sniper') {
                    e.aimT = 1.5;
                    e.cool = e.T.rof;
                } else {
                    e.burstLeft = e.T.burst || 1;
                    e.burstT = 0;
                    e.cool = e.T.rof;
                }
            }

        } else {
            if (e.attackT <= 0 && e.aimT <= 0) {
                this._follow(e, dt, targetPos, speed);
            }
        }

        if (e.aimT > 0) {
            e.aimT -= dt;
            if (e.aimT <= 0) {
                this._shoot(e, dt, targetPos, target);
            }
        } else if (e.burstLeft > 0) {
            e.burstT -= dt;
            if (e.burstT <= 0) {
                this._shoot(e, dt, targetPos, target);
                e.burstLeft--;
                e.burstT = e.T.burstInt || 0.1;
            }
        }

        const speed2d = Math.hypot(e.body.vel.x, e.body.vel.z);
        if (speed2d > 0.5) {
            e.walk = clamp(e.walk + dt * 5, 0, 1);
            e.phase += speed2d * dt * 0.5;
        } else {
            e.walk = clamp(e.walk - dt * 5, 0, 1);
        }

        e.aimAmt = clamp(e.aimAmt + ((e.los && dist2d < maxRange) ? dt*5 : -dt*5), 0, 1);
    }

    _thinkBlade(e, dt, targetPos) {
        const speed = e.T.speed * this.mods.speed;
        
        _v3.subVectors(targetPos, e.root.position);
        _v3.y = 0;
        const dist2d = _v3.length();

        if (e.attackT > 0) {
            e.attackT -= dt;
            e.walk = damp(e.walk, 0, 10, dt);
            
            if (e.attackT < 0.6 && e.attackT > 0.4 && !e.attackHit) {
                e.attackHit = true;
                const p = 15;
                e.body.vel.x += Math.sin(e.yawT) * p;
                e.body.vel.z += Math.cos(e.yawT) * p;
                D.play('swing', e.root.position, 1);
            }

            if (e.attackHit && dist2d < 3) {
                if (this.ctx.player && this.ctx.player.damage) {
                    this.ctx.player.damage(e.T.damage || 20);
                }
            }
            
        } else {
            e.attackHit = false;
            if (dist2d < 2.5) {
                e.attackT = 1.0;
                e.yawT = Math.atan2(_v3.x, _v3.z);
            } else {
                this._follow(e, dt, targetPos, speed);
                e.walk = clamp(e.walk + dt * 5, 0, 1);
                e.phase += Math.hypot(e.body.vel.x, e.body.vel.z) * dt * 0.5;
            }
        }
    }

    _thinkBoss(e, dt, targetPos, targetCenter) {
        this._follow(e, dt, targetPos, e.T.speed);
        e.walk = clamp(e.walk + dt*5, 0, 1);
        e.phase += dt * 2;
    }

    _thinkFlyer(e, dt, targetPos, targetCenter) {
        _v3.subVectors(targetPos, e.root.position);
        const dist = _v3.length();
        
        if (e.flyState === 'orbit') {
            e.flyT -= dt;
            const orbitRad = 11;
            const orbitHeight = 6;
            
            const angle = Math.atan2(_v3.x, _v3.z) + (Math.PI / 2) * e.orbitDir;
            const tx = targetPos.x + Math.sin(angle) * orbitRad;
            const tz = targetPos.z + Math.cos(angle) * orbitRad;
            const ty = targetPos.y + orbitHeight;

            e.yawT = Math.atan2(tx - e.root.position.x, tz - e.root.position.z);
            
            _v4.set(tx, ty, tz).sub(e.root.position).normalize();
            e.body.pos.addScaledVector(_v4, e.T.speed * dt);

            if (e.flyT <= 0) {
                e.flyState = 'dive';
                e.flyT = 2; 
                D.play('alert', e.root.position, 1);
            }
        } else if (e.flyState === 'dive') {
            e.flyT -= dt;
            e.yawT = Math.atan2(_v3.x, _v3.z);
            
            _v4.copy(_v3).normalize();
            e.body.pos.addScaledVector(_v4, e.T.speed * 2.5 * dt);

            if (dist < 2) { 
                if (this.ctx.player && this.ctx.player.damage) {
                    this.ctx.player.damage(e.T.damage || 15);
                }
                e.flyState = 'climb';
                e.flyT = 1.5;
            } else if (e.flyT <= 0 || e.body.onGround) {
                e.flyState = 'climb';
                e.flyT = 1.5;
            }
        } else if (e.flyState === 'climb') {
            e.flyT -= dt;
            e.body.pos.y += e.T.speed * 1.5 * dt;
            if (e.flyT <= 0) {
                e.flyState = 'orbit';
                e.flyT = 3 + rand()*2;
                e.orbitDir *= -1;
            }
        }
    }

    _follow(e, dt, targetPos, speed) {
        e.pathT -= dt;
        if (e.pathT <= 0 || !e.path) {
            e.pathT = 0.5 + rand() * 0.5;
            if (this.ctx.nav) {
                e.path = this.ctx.nav.findPath(e.root.position, targetPos);
                e.pathI = 0;
            }
        }

        if (e.path && e.pathI < e.path.length) {
            const wp = e.path[e.pathI];
            _v4.subVectors(wp, e.root.position);
            _v4.y = 0;
            const d = _v4.length();
            
            if (d < 1) {
                e.pathI++;
            } else {
                this._steer(e, dt, wp.x, wp.z, speed, 15);
                if (wp.y > e.root.position.y + 0.5 && e.body.onGround) {
                    e.body.vel.y = 8; 
                }
            }
        } else {
            this._steer(e, dt, targetPos.x, targetPos.z, speed, 10);
        }

        if (e.body.hitWall && e.body.onGround) {
            e.stuckT += dt;
            if (e.stuckT > 0.5) {
                e.body.vel.y = 10;
                e.stuckT = 0;
            }
        } else {
            e.stuckT = 0;
        }
    }

    _steer(e, dt, tx, tz, maxSpeed, accel) {
        const dx = tx - e.body.pos.x;
        const dz = tz - e.body.pos.z;
        const d = Math.hypot(dx, dz);
        
        if (d > 0.1) {
            e.yawT = Math.atan2(dx, dz);
            
            const vx = (dx / d) * maxSpeed;
            const vz = (dz / d) * maxSpeed;

            e.body.vel.x = damp(e.body.vel.x, vx, accel, dt);
            e.body.vel.z = damp(e.body.vel.z, vz, accel, dt);
        }
    }

    _shoot(e, dt, targetPos, targetObj) {
        if (!e.tip) return;
        
        const origin = new THREE.Vector3();
        e.tip.getWorldPosition(origin);

        const dir = new THREE.Vector3().subVectors(targetPos, origin);
        dir.y += 1; 
        dir.normalize();

        const type = e.T.proj || 'bullet';
        const pT = this.projectiles.TYPES[type] || { speed:20, dmg:10 };

        const dmg = pT.dmg * this.mods.damage;

        if (e.T.weapon === 'shotgun') {
            for (let i=0; i<5; i++) {
                const spreadDir = dir.clone();
                spreadDir.x += (rand() - 0.5) * 0.2;
                spreadDir.y += (rand() - 0.5) * 0.2;
                spreadDir.z += (rand() - 0.5) * 0.2;
                spreadDir.normalize();
                this.projectiles.fire(origin, spreadDir, type, false, e, dmg);
            }
            D.play('shotgun', origin, 1);
        } else {
            dir.x += (rand() - 0.5) * 0.05;
            dir.y += (rand() - 0.5) * 0.05;
            dir.z += (rand() - 0.5) * 0.05;
            dir.normalize();

            this.projectiles.fire(origin, dir, type, false, e, dmg);
            D.play('shoot', origin, 1);
        }

        if (this.ctx.effects) {
            this.ctx.effects.muzzle(origin, dir, e.T.ink || 1);
        }
    }

    damage(enemy, amount, hitInfo) {
        if (!enemy.alive) return false;

        enemy.flashT = 0.1;
        
        let dmg = amount;
        
        if (enemy.shieldHp > 0) {
            enemy.shieldHp -= dmg;
            if (enemy.shieldHp <= 0 || hitInfo.source === 'katana' || hitInfo.source === 'blast') {
                enemy.shieldHp = 0; 
                D.play('shield_break', enemy.root.position, 1);
            } else {
                D.play('shield_hit', enemy.root.position, 1);
                return true;
            }
        }

        if (hitInfo.crit) {
            dmg *= 2;
            D.play('crit', enemy.root.position, 1);
        }

        enemy.hp -= dmg;
        enemy.flinch = 1;

        if (this.ctx.effects && hitInfo.point) {
            this.ctx.effects.blood(hitInfo.point, hitInfo.dir || new THREE.Vector3(0,1,0), enemy.T.ink || 1);
        }

        if (enemy.hp <= 0) {
            this.kill(enemy, hitInfo);
            return true;
        }

        D.play('hit', enemy.root.position, 1);
        return false;
    }

    kill(enemy, hitInfo) {
        if (!enemy.alive) return;
        enemy.alive = false;
        this.alive--;

        if (enemy.face && enemy.face.material) {
        }

        D.play('death', enemy.root.position, 1);

        if (this.ctx.effects) {
            this.ctx.effects.burst(enemy.root.position, enemy.T.ink || 1, 20);
        }

        if (enemy.T.model === 'bomber' || enemy.T.isBoss) {
            if (this.ctx.effects) {
                this.ctx.effects.explosion(enemy.root.position, 5, enemy.T.ink);
            }
        }

        if (enemy.T.isBoss && this.onBoss) {
            this.onBoss(enemy);
        }

        if (this.onKill) {
            this.onKill(enemy, hitInfo, hitInfo.crit || hitInfo.source === 'katana');
        }
    }

    raycast(origin, dir, maxDist, exclude = null) {
        let closest = null;
        let minDist = maxDist;

        for (const e of this.enemies) {
            if (!e.alive || e === exclude) continue;

            for (const s of e.hit) {
                const center = s.obj ? s.obj.position : e.center;
                const radius = s.r || e.T.radius;

                _v3.subVectors(center, origin);
                const t = _v3.dot(dir);
                
                if (t < 0 || t > minDist) continue;

                _v4.copy(origin).addScaledVector(dir, t);
                const d2 = _v4.distanceToSquared(center);
                
                if (d2 <= radius * radius) {
                    minDist = t;
                    closest = { enemy: e, part: s.part, dist: t, point: _v4.clone() };
                }
            }
        }
        return closest;
    }

    inArc(origin, forward, range, dotThreshold) {
        const hits = [];
        for (const e of this.enemies) {
            if (!e.alive) continue;
            _v3.subVectors(e.center, origin);
            const dist = _v3.length();
            if (dist > range) continue;
            
            _v3.divideScalar(dist);
            const dot = _v3.dot(forward);
            if (dot > dotThreshold) {
                hits.push({ enemy: e, dist: dist });
            }
        }
        hits.sort((a, b) => a.dist - b.dist);
        return hits;
    }

    _animate(e, dt, targetCenter) {
        if (!e.J || !e.J.root) return;

        e.J.root.rotation.y = e.yaw;
        
        e.J.root.rotation.x = e.flinch * -0.3;

        const walkSin = Math.sin(e.phase * TAU);
        const walkCos = Math.cos(e.phase * TAU);
        
        if (e.J.hips) {
            e.J.hips.position.y = Math.abs(walkSin) * 0.2 * e.walk;
        }

        if (e.J.legL && e.J.legR) {
            e.J.legL.rotation.x = walkCos * 0.8 * e.walk;
            e.J.legR.rotation.x = -walkCos * 0.8 * e.walk;
        }

        if (e.J.armL && e.J.armR) {
            const armWalkL = -walkCos * 0.5 * e.walk;
            const armWalkR = walkCos * 0.5 * e.walk;
            
            const armAimL = -Math.PI / 2;
            const armAimR = -Math.PI / 2;

            e.J.armL.rotation.x = armWalkL * (1 - e.aimAmt) + armAimL * e.aimAmt;
            e.J.armR.rotation.x = armWalkR * (1 - e.aimAmt) + armAimR * e.aimAmt;
        }

        if (e.J.head) {
            _v3.subVectors(targetCenter, e.center).normalize();
            const pitch = Math.asin(_v3.y);
            let yawDiff = Math.atan2(_v3.x, _v3.z) - e.yaw;
            yawDiff = wrapAngle(yawDiff);
            
            e.J.head.rotation.x = clamp(pitch, -1, 1) * e.aimAmt;
            e.J.head.rotation.y = clamp(yawDiff, -1, 1) * e.aimAmt;
        }

        if (e.T.weapon === 'blade' && e.attackT > 0) {
            const t = 1 - (e.attackT / 1.0); 
            if (e.J.armR) {
                if (t < 0.3) {
                    e.J.armR.rotation.x = Math.PI; 
                } else if (t < 0.6) {
                    e.J.armR.rotation.x = -Math.PI / 4; 
                } else {
                    e.J.armR.rotation.x = damp(e.J.armR.rotation.x, 0, 5, dt);
                }
            }
        }
    }

    _animateFlyer(e, dt) {
        if (!e.J || !e.J.root) return;
        
        e.J.root.rotation.y = e.yaw;

        e.phase += dt * 5;
        const flap = Math.sin(e.phase * TAU) * 0.5;
        
        if (e.J.wingL) e.J.wingL.rotation.z = flap;
        if (e.J.wingR) e.J.wingR.rotation.z = -flap;

        const speedSq = e.body.vel.x*e.body.vel.x + e.body.vel.z*e.body.vel.z;
        let pitch = 0;
        if (speedSq > 1) pitch = Math.PI / 4;
        
        e.J.root.rotation.x = damp(e.J.root.rotation.x, pitch, 5, dt);
    }
}
