import * as THREE from 'three';
import { INK, gt } from './renderer.js';

export class Projectiles {
  constructor(scene, world, enemyMgr) {
    this.scene = scene;
    this.world = world;
    this.enemyMgr = enemyMgr;
    this.list = [];
    this.max = 240;
    
    this.geom = new THREE.BoxGeometry(1, 1, 1);
    this.mat = gt({ ink: INK.RED, fill: true });
    this.mesh = new THREE.InstancedMesh(this.geom, this.mat, this.max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(this.max * 3), 3);
    this.mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);
    
    this.onFire = null;
    this._dummy = new THREE.Object3D();
  }

  fire(origin, dir, speed, dmg, owner, ink = 2, thick = 0.045, blast = 0) {
    if (this.list.length >= this.max) return;
    
    const proj = {
      id: Math.random(),
      pos: origin.clone(),
      prev: origin.clone(),
      vel: dir.clone().normalize().multiplyScalar(speed),
      dmg,
      owner,
      life: 4,
      deflected: false,
      ink,
      thick,
      origin: origin.clone(),
      blast
    };
    
    this.list.push(proj);
    if (this.onFire) this.onFire(proj);
  }

  clear() {
    this.list = [];
    this.mesh.count = 0;
  }

  update(dt, playerTargets) {
    let count = 0;
    
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      p.life -= dt;
      
      if (p.life <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      
      p.prev.copy(p.pos);
      if (p.blast > 0) {
        p.vel.y -= 15 * dt; // gravity
      }
      
      p.pos.addScaledVector(p.vel, dt);
      
      // Raycast against walls
      const steps = Math.ceil(p.prev.distanceTo(p.pos) / 0.5);
      let hitWall = false;
      
      // Very basic segment check for world collisions
      // Assuming a simplistic check for now
      if (p.pos.y < 0) {
        hitWall = true;
        p.pos.y = 0;
      }
      
      if (hitWall) {
        if (p.blast > 0) {
          this._burst(p, p.pos);
        }
        this.list.splice(i, 1);
        continue;
      }

      // Check hits
      let hitFound = false;
      if (p.deflected) {
        // Check enemies
      } else {
        // Check players
        for (const pt of playerTargets) {
          if (this._segHitsPlayer(p.prev, p.pos, pt, 0.4)) {
            hitFound = true;
            break;
          }
        }
      }

      if (hitFound) {
        if (p.blast > 0) {
          this._burst(p, p.pos);
        }
        this.list.splice(i, 1);
        continue;
      }
      
      // Update instances
      const len = p.vel.length() * 0.05 + 0.2;
      this._dummy.position.copy(p.pos);
      this._dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.vel.clone().normalize());
      this._dummy.scale.set(p.thick, p.thick, p.blast > 0 ? p.thick * 2 : len);
      this._dummy.updateMatrix();
      
      this.mesh.setMatrixAt(count, this._dummy.matrix);
      this.mesh.instanceColor.setXYZ(count, p.ink, 1, 0);
      
      count++;
    }
    
    this.mesh.count = count;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.instanceColor.needsUpdate = true;
  }

  deflectArc(center, forward, radius, dotThreshold, player) {
    for (const p of this.list) {
      if (p.deflected) continue;
      const dist = p.pos.distanceTo(center);
      if (dist < radius) {
        const toProj = p.pos.clone().sub(center).normalize();
        if (forward.dot(toProj) > dotThreshold) {
          p.deflected = true;
          p.ink = INK.BLUE || 1;
          p.dmg *= 2;
          p.vel.negate();
          p.life = 4;
        }
      }
    }
  }

  _segHitsPlayer(from, to, target, radius) {
    const p = target.pos;
    if (!p) return false;
    const dist = p.distanceTo(from); // Simplified
    return dist < radius;
  }

  _burst(proj, pos) {
    // Blast logic
  }
}
