import * as THREE from 'three';
import { clamp, damp, rand, Spring, Spring3, _v1, _v2, _v3 } from './utils.js';
import { createBody, noShoot } from './physics.js';
import { D } from './audio.js';
import { INK } from './renderer.js';

export class Player {
    constructor(camera, world, input, effects, hud) {
        this.camera = camera;
        this.world = world;
        this.input = input;
        this.effects = effects;
        this.hud = hud;

        this.body = createBody(new THREE.Vector3(0, 5, 0), 0.36, 1.85, 0.55);
        this.alive = true;
        this.maxHp = 100;
        this.hp = this.maxHp;
        
        this.yaw = 0;
        this.pitch = 0;
        this.center = new THREE.Vector3();
        this.eye = new THREE.Vector3();
        this.forward = new THREE.Vector3();
        this.speed = 0;
        this.isLocal = true;
        this.weapons = null;

        this.SPEED = 8;
        this.SPRINT_MULT = 1.6;
        this.CROUCH_MULT = 0.5;
        this.JUMP_FORCE = 9;

        this.crouchT = 0;
        this.slideT = 0;
        this.slideDir = new THREE.Vector3();
        this.dashCool = 0;
        this.coyoteT = 0;
        this.wallJumpT = 0;
        
        this.footstepTimer = 0;

        this.viewBob = new Spring(15, 0.5);
        this.recoilSpring = new Spring3(20, 0.4);
        this.landBob = new Spring(12, 0.5);
        this.fovSpring = new Spring(10, 0.6);
        this.baseFOV = 80;

        this.grappling = false;
        this.grappleTarget = new THREE.Vector3();
        this.grappleT = 0;
        this.grappleStamina = 1;
        this.grappleMaxDist = 60;
        
        this.grappleLine = new THREE.Mesh(
            new THREE.CylinderGeometry(0.02, 0.02, 1, 8, 16),
            new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.8 })
        );
        this.grappleLine.geometry.translate(0, 0.5, 0);
        this.grappleLine.geometry.rotateX(Math.PI / 2);
        this.grappleLine.visible = false;
        
        this.hurtT = 0;
        this.spawnInvulT = 0;  // invulnerability timer after spawning
        this.regenDelay = 4;
        this.regenTimer = 0;
        this.regenRate = 15;
        this.blockRadius = 0;
    }

    get health() { return this.hp; }
    set health(v) { this.hp = v; }
    get maxHealth() { return this.maxHp; }
    get pos() { return this.body.pos; }

    spawn(pos) {
        if (Array.isArray(pos)) {
            this.body.pos.set(pos[0], pos[1], pos[2]);
        } else if (pos && typeof pos.x === 'number') {
            this.body.pos.copy(pos);
        }
        this.body.vel.set(0, 0, 0);
        this.hp = this.maxHp;
        this.alive = true;
        this.regenTimer = 0;
        this.hurtT = 0;
        this.crouchT = 0;
        this.slideT = 0;
        this.dashCool = 0;
        this.coyoteT = 0;
        this.grappling = false;
        this.grappleStamina = 1;
        this.spawnInvulT = 2.5; // 2.5s of invulnerability after spawning
        
        // Ensure grapple line is in the scene if camera is part of it
        if (!this.grappleLine.parent && this.camera.parent) {
            this.camera.parent.add(this.grappleLine);
        }
    }

    update(dt) {
        if (!this.alive) return;
        if (this.spawnInvulT > 0) this.spawnInvulT -= dt;

        // 1. Mouse look
        this.yaw -= this.input.look.x;
        this.pitch = clamp(this.pitch - this.input.look.y, -Math.PI / 2 + 0.01, Math.PI / 2 - 0.01);

        // 2. Movement calculation
        let mx = this.input.move.x;
        let my = this.input.move.y;
        
        let moving = Math.abs(mx) > 0.1 || Math.abs(my) > 0.1;
        let sprinting = this.input.down('sprint') && my > 0 && this.body.onGround && this.crouchT < 0.5 && !this.input.down('crouch');
        
        let mult = 1;
        if (sprinting) mult = this.SPRINT_MULT;
        if (this.crouchT > 0.5) mult = this.CROUCH_MULT;
        
        let targetSpeed = this.SPEED * mult;
        this.speed = moving ? targetSpeed : 0;
        
        let moveLen = Math.sqrt(mx * mx + my * my);
        if (moveLen > 1) {
            mx /= moveLen;
            my /= moveLen;
        }
        
        let s = Math.sin(this.yaw);
        let c = Math.cos(this.yaw);
        
        let moveX = (mx * c - my * s) * targetSpeed;
        let moveZ = (-mx * s - my * c) * targetSpeed;

        // 3. Crouch
        let wantCrouch = this.input.down('crouch');
        if (wantCrouch && sprinting && this.body.onGround && this.slideT <= 0) {
            this.slideT = 0.5;
            this.slideDir.set(moveX, 0, moveZ).normalize().multiplyScalar(this.SPEED * 1.8);
            D.play('slide');
        }

        if (wantCrouch) {
            this.crouchT = damp(this.crouchT, 1, 10, dt);
        } else {
            this.crouchT = damp(this.crouchT, 0, 10, dt);
        }
        this.body.height = 1.85 - this.crouchT * 0.75;

        // 4. Slide
        if (this.slideT > 0) {
            this.slideT -= dt;
            moveX = this.slideDir.x * (this.slideT / 0.5);
            moveZ = this.slideDir.z * (this.slideT / 0.5);
        }

        // Apply horizontal movement
        if (this.body.onGround) {
            this.body.vel.x = damp(this.body.vel.x, moveX, 15, dt);
            this.body.vel.z = damp(this.body.vel.z, moveZ, 15, dt);
        } else {
            this.body.vel.x = damp(this.body.vel.x, moveX, 5, dt);
            this.body.vel.z = damp(this.body.vel.z, moveZ, 5, dt);
        }

        // 5. Jump
        if (this.body.onGround) {
            this.coyoteT = 0.12;
            this.wallJumpT = 0;
        } else {
            this.coyoteT -= dt;
            if (this.body.hitWall) {
                this.wallJumpT = 0.2;
            } else {
                this.wallJumpT -= dt;
            }
        }

        if (this.input.pressed('jump')) {
            if (this.body.onGround || this.coyoteT > 0) {
                this.body.vel.y = this.JUMP_FORCE;
                this.coyoteT = 0;
                D.play('jump');
            } else if (this.body.hitWall && this.wallJumpT > 0) {
                this.body.vel.y = 8;
                this.body.vel.x += this.body.wallNormal.x * 6;
                this.body.vel.z += this.body.wallNormal.z * 6;
                this.wallJumpT = 0;
                D.play('jump');
            }
        }

        // 6. Dash
        if (this.dashCool > 0) this.dashCool -= dt;
        if (this.input.pressed('dash') && this.dashCool <= 0) {
            let dirX = moveX;
            let dirZ = moveZ;
            if (!moving) {
                dirX = -s * this.SPEED;
                dirZ = c * this.SPEED;
            }
            let len = Math.sqrt(dirX*dirX + dirZ*dirZ);
            if (len > 0) {
                dirX /= len;
                dirZ /= len;
            }
            this.body.vel.x += dirX * 15;
            this.body.vel.z += dirZ * 15;
            this.dashCool = 1.5;
            D.play('dash');
            this.effects.shakeAmt += 0.2;
            this.fovSpring.kick(20);
        }

        // 7. Gravity
        if (!this.grappling) {
            this.body.vel.y -= 24 * dt;
        }

        // 8. Physics step
        let wasOnGround = this.body.onGround;
        this.world.moveBody(this.body, dt);

        // 9. Landing detection
        if (!wasOnGround && this.body.onGround && this.body.landVel < -4) {
            D.play('land');
            this.landBob.kick(-this.body.landVel * 0.05);
        }

        // 10. Footsteps
        if (this.body.onGround && moving) {
            this.footstepTimer += dt;
            let stepInterval = sprinting ? 0.25 : 0.35;
            if (this.footstepTimer > stepInterval) {
                this.footstepTimer = 0;
                D.play('step');
            }
        } else {
            this.footstepTimer = 0;
        }

        // 11. Grapple hook
        let eyeHeight = 1.65 - this.crouchT * 0.65;
        if (this.input.pressed('grapple') && !this.grappling && this.grappleStamina > 0.2) {
            _v1.set(this.body.pos.x, this.body.pos.y + eyeHeight, this.body.pos.z); // eye pos
            _v2.set(0, 0, -1).applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ')); // forward
            
            let hit = this.world.raycast(_v1, _v2, this.grappleMaxDist, noShoot);
            
            // Magnetic Aim Assist (Cone lock-on)
            if (!hit) {
                let bestDist = Infinity;
                let bestPoint = null;
                for (const box of this.world.boxes) {
                    if (box.data && box.data.noGrapple) continue;
                    const center = box.min.clone().lerp(box.max, 0.5);
                    const dirToCenter = center.clone().sub(_v1);
                    const dist = dirToCenter.length();
                    if (dist < this.grappleMaxDist && dist > 2) {
                        dirToCenter.normalize();
                        const dot = dirToCenter.dot(_v2);
                        if (dot > 0.96) { // ~15 degrees
                            if (dist < bestDist) {
                                bestDist = dist;
                                bestPoint = center;
                            }
                        }
                    }
                }
                if (bestPoint) {
                    hit = { point: bestPoint };
                }
            }

            if (hit) {
                this.grappleTarget.copy(hit.point);
                this.grappling = true;
                D.play('grappleFire');
                if (!this.grappleLine.parent && this.camera.parent) {
                    this.camera.parent.add(this.grappleLine);
                }
                this.grappleLine.visible = true;
            }
        }

        if (this.grappling) {
            _v1.set(this.body.pos.x, this.body.pos.y + 1.0, this.body.pos.z);
            let dir = _v2.copy(this.grappleTarget).sub(_v1);
            let dist = dir.length();
            
            if (dist > 1) {
                dir.normalize();
                // Dual-force system: strong pull + momentum retention
                const pullForce = 45;
                this.body.vel.x += dir.x * pullForce * dt;
                this.body.vel.y += dir.y * pullForce * dt;
                this.body.vel.z += dir.z * pullForce * dt;
                
                // Retain momentum but add slight drag for stability
                this.body.vel.multiplyScalar(Math.pow(0.4, dt));
            }
            
            this.grappleStamina -= dt * 0.5;
            
            let handPos = _v3.copy(this.eye).add(this.forward.clone().multiplyScalar(0.5)).add(new THREE.Vector3(0.2, -0.2, 0).applyEuler(this.camera.rotation));
            this.grappleLine.position.copy(handPos);
            this.grappleLine.lookAt(this.grappleTarget);
            this.grappleLine.scale.set(1, 1, handPos.distanceTo(this.grappleTarget));
            
            if (D.reelLoop) D.reelLoop(true);
            
            if (this.input.released('grapple') || this.grappleStamina <= 0 || dist < 1.5) {
                this.grappling = false;
                if (D.reelLoop) D.reelLoop(false);
                this.grappleLine.visible = false;
            }
        } else {
            this.grappleStamina = Math.min(1, this.grappleStamina + dt * 0.3);
            if (D.reelLoop) D.reelLoop(false);
        }

        // 12. Camera update
        this.viewBob.update(dt);
        this.recoilSpring.update(dt);
        this.landBob.update(dt);
        this.fovSpring.update(dt);

        if (this.body.onGround && moving) {
            this.viewBob.target = Math.sin(performance.now() * 0.015) * 0.05 * mult;
        } else {
            this.viewBob.target = 0;
        }
        
        let targetFov = this.baseFOV;
        if (sprinting) targetFov += 10;
        if (this.grappling) targetFov += 15;
        
        let weaponZoom = 0;
        if (this.weapons && this.weapons.ads && this.weapons.slots[this.weapons.activeSlot].def.adsZoom) {
            weaponZoom = this.weapons.slots[this.weapons.activeSlot].def.adsZoom;
        }
        
        this.fovSpring.target = (targetFov - this.baseFOV) + weaponZoom;

        this.eye.set(this.body.pos.x, this.body.pos.y + eyeHeight + this.landBob.value + this.viewBob.value, this.body.pos.z);
        this.eye.add(this.recoilSpring.value);
        
        this.camera.position.copy(this.eye);
        this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
        this.camera.fov = this.baseFOV + this.fovSpring.value;
        this.camera.updateProjectionMatrix();

        this.center.set(this.body.pos.x, this.body.pos.y + this.body.height / 2, this.body.pos.z);
        this.camera.getWorldDirection(this.forward);

        // 13. Health regen
        this.regenTimer += dt;
        if (this.regenTimer > this.regenDelay && this.hp < this.maxHp) {
            this.hp += this.regenRate * dt;
            if (this.hp > this.maxHp) this.hp = this.maxHp;
        }
        if (this.hud && this.hud.updateHealth) {
            this.hud.updateHealth(this.hp, this.maxHp);
        } else if (this.hud && this.hud.setHealth) {
            this.hud.setHealth(this.hp, this.maxHp);
        }
        if (this.hurtT > 0) {
            this.hurtT -= dt;
        }

        // 14. Fall death
        if (this.body.pos.y < -15) {
            this.die();
        }
    }

    takeDamage(amount, sourcePos) {
        if (!this.alive) return;
        if (this.spawnInvulT > 0) return; // spawn invulnerability
        this.hp -= amount;
        D.play('hurt');
        this.hurtT = 1.0;
        this.regenTimer = 0;
        this.effects.shakeAmt += 0.3;
        
        if (sourcePos && this.hud && this.hud.addDamageIndicator) {
            _v1.copy(sourcePos).sub(this.center);
            _v1.y = 0;
            _v1.normalize();
            let angle = Math.atan2(_v1.x, _v1.z) - this.yaw;
            this.hud.addDamageIndicator(angle);
        }

        if (this.hp <= 0) {
            this.die();
        }
    }

    knockback(dir, force) {
        this.body.vel.x += dir.x * force;
        this.body.vel.y += force * 0.5;
        this.body.vel.z += dir.z * force;
        this.body.onGround = false;
    }

    die() {
        if (!this.alive) return;
        this.alive = false;
        D.play('death');
        this.effects.shakeAmt += 0.5;
        this.hp = 0;
    }

    tryDeflect(projectile) {
        const active = this.weapons ? this.weapons.getActiveWeapon() : null;
        if (active && active.name.toLowerCase() === 'katana' && this.weapons.swingT > 0) {
            return { ret: true, perfect: false };
        }
        return null;
    }

    tryBlockMelee(attacker) {
        const active = this.weapons ? this.weapons.getActiveWeapon() : null;
        if (active && active.name.toLowerCase() === 'katana' && (this.input.down('aim') || this.weapons.swingT > 0)) {
            D.play('parry');
            return true;
        }
        return false;
    }

    addAmmo(amount) {
        // Pickup gives ammo to all gun slots
        if (this.weapons) {
            for (const slot of this.weapons.slots) {
                if (slot.def.ammo !== Infinity) {
                    slot.reserve = Math.min(slot.reserve + Math.floor(amount / 2), slot.def.reserve * 2);
                }
            }
            this.weapons.updateHUDAmmo();
        }
    }

    getHurt() {
        return Math.max(0, this.hurtT);
    }

    getFlash() {
        return this.hurtT > 0.8 ? (this.hurtT - 0.8) / 0.2 : 0;
    }

    getLowHp() {
        return this.hp < 30 ? 1.0 - (this.hp / 30) : 0;
    }
}
