import * as THREE from 'three';

let queryId = 0;

export class World {
  constructor(cell = 8) {
    this.cell = cell;
    this.boxes = [];
    this.grid = new Map();
    this.bounds = { min: new THREE.Vector3(), max: new THREE.Vector3() };
  }

  clear() {
    this.boxes = [];
    this.grid.clear();
  }

  addBox(min, max, data = {}) {
    this.boxes.push({ 
      min: new THREE.Vector3(min.x, min.y, min.z), 
      max: new THREE.Vector3(max.x, max.y, max.z), 
      data, 
      id: ++queryId, 
      q: 0 
    });
  }

  finalize() {
    this.grid.clear();
    for (const box of this.boxes) {
      this._insert(box);
    }
  }

  removeBox(box) {
    const idx = this.boxes.indexOf(box);
    if (idx !== -1) {
      this.boxes.splice(idx, 1);
      this.finalize();
    }
  }

  insertBox(min, max, data = {}) {
    const box = { 
      min: new THREE.Vector3(min.x, min.y, min.z), 
      max: new THREE.Vector3(max.x, max.y, max.z), 
      data, 
      id: ++queryId, 
      q: 0 
    };
    this.boxes.push(box);
    this._insert(box);
    return box;
  }

  _key(cx, cz) {
    return (cx + 4096) * 8192 + (cz + 4096);
  }

  _insert(box) {
    const cxmin = Math.floor(box.min.x / this.cell);
    const cxmax = Math.floor(box.max.x / this.cell);
    const czmin = Math.floor(box.min.z / this.cell);
    const czmax = Math.floor(box.max.z / this.cell);

    for (let cx = cxmin; cx <= cxmax; cx++) {
      for (let cz = czmin; cz <= czmax; cz++) {
        const k = this._key(cx, cz);
        let cell = this.grid.get(k);
        if (!cell) {
          cell = [];
          this.grid.set(k, cell);
        }
        cell.push(box);
      }
    }
  }

  query(min, max, results = []) {
    results.length = 0;
    queryId++;
    
    const cxmin = Math.floor(min.x / this.cell);
    const cxmax = Math.floor(max.x / this.cell);
    const czmin = Math.floor(min.z / this.cell);
    const czmax = Math.floor(max.z / this.cell);

    for (let cx = cxmin; cx <= cxmax; cx++) {
      for (let cz = czmin; cz <= czmax; cz++) {
        const cell = this.grid.get(this._key(cx, cz));
        if (cell) {
          for (const box of cell) {
            if (box.q !== queryId) {
              box.q = queryId;
              if (
                max.x > box.min.x && min.x < box.max.x &&
                max.y > box.min.y && min.y < box.max.y &&
                max.z > box.min.z && min.z < box.max.z
              ) {
                results.push(box);
              }
            }
          }
        }
      }
    }
    return results;
  }

  overlapsAABB(min, max) {
    queryId++;
    
    const cxmin = Math.floor(min.x / this.cell);
    const cxmax = Math.floor(max.x / this.cell);
    const czmin = Math.floor(min.z / this.cell);
    const czmax = Math.floor(max.z / this.cell);

    for (let cx = cxmin; cx <= cxmax; cx++) {
      for (let cz = czmin; cz <= czmax; cz++) {
        const cell = this.grid.get(this._key(cx, cz));
        if (cell) {
          for (const box of cell) {
            if (box.q !== queryId) {
              box.q = queryId;
              if (
                max.x > box.min.x && min.x < box.max.x &&
                max.y > box.min.y && min.y < box.max.y &&
                max.z > box.min.z && min.z < box.max.z
              ) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  overlapsBody(body) {
    const min = new THREE.Vector3(body.pos.x - body.halfW, body.pos.y, body.pos.z - body.halfW);
    const max = new THREE.Vector3(body.pos.x + body.halfW, body.pos.y + body.height, body.pos.z + body.halfW);
    return this.overlapsAABB(min, max);
  }

  _resolveAxis(body, axis, delta, bmin, bmax) {
    const results = [];
    this.query(bmin, bmax, results);
    
    let move = 0;
    let sign = 0;
    
    for (const box of results) {
      if (delta > 0) { // Moving positive
        const overlap = bmax[axis] - box.min[axis];
        if (overlap > 0 && overlap > move) {
          move = overlap;
          sign = -1;
        }
      } else if (delta < 0) { // Moving negative
        const overlap = box.max[axis] - bmin[axis];
        if (overlap > 0 && overlap > move) {
          move = overlap;
          sign = 1;
        }
      }
    }
    
    if (move > 0) {
      body.pos[axis] += move * sign;
      return sign;
    }
    return 0;
  }

  _moveHoriz(body, dx, dz, canStep) {
    if (dx === 0 && dz === 0) return;

    const flatX = body.pos.x;
    const flatY = body.pos.y;
    const flatZ = body.pos.z;

    // Test flat move
    body.pos.x += dx;
    let bmin = new THREE.Vector3(body.pos.x - body.halfW, body.pos.y, body.pos.z - body.halfW);
    let bmax = new THREE.Vector3(body.pos.x + body.halfW, body.pos.y + body.height, body.pos.z + body.halfW);
    const flatBx = dx !== 0 ? this._resolveAxis(body, 'x', dx, bmin, bmax) : 0;
    
    body.pos.z += dz;
    bmin = new THREE.Vector3(body.pos.x - body.halfW, body.pos.y, body.pos.z - body.halfW);
    bmax = new THREE.Vector3(body.pos.x + body.halfW, body.pos.y + body.height, body.pos.z + body.halfW);
    const flatBz = dz !== 0 ? this._resolveAxis(body, 'z', dz, bmin, bmax) : 0;

    if (!canStep || (flatBx === 0 && flatBz === 0)) {
      if (flatBx !== 0 || flatBz !== 0) {
        body.hitWall = true;
        body.wallNormal.set(flatBx, 0, flatBz).normalize();
      }
      return;
    }

    const resFlat = { x: body.pos.x, y: body.pos.y, z: body.pos.z };
    
    // Reset to start and try step
    body.pos.set(flatX, flatY + body.stepHeight, flatZ);
    
    body.pos.x += dx;
    bmin = new THREE.Vector3(body.pos.x - body.halfW, body.pos.y, body.pos.z - body.halfW);
    bmax = new THREE.Vector3(body.pos.x + body.halfW, body.pos.y + body.height, body.pos.z + body.halfW);
    const stepBx = dx !== 0 ? this._resolveAxis(body, 'x', dx, bmin, bmax) : 0;
    
    body.pos.z += dz;
    bmin = new THREE.Vector3(body.pos.x - body.halfW, body.pos.y, body.pos.z - body.halfW);
    bmax = new THREE.Vector3(body.pos.x + body.halfW, body.pos.y + body.height, body.pos.z + body.halfW);
    const stepBz = dz !== 0 ? this._resolveAxis(body, 'z', dz, bmin, bmax) : 0;
    
    // Step down
    body.pos.y -= body.stepHeight;
    bmin = new THREE.Vector3(body.pos.x - body.halfW, body.pos.y, body.pos.z - body.halfW);
    bmax = new THREE.Vector3(body.pos.x + body.halfW, body.pos.y + body.height, body.pos.z + body.halfW);
    const stepDy = -body.stepHeight;
    const sign = this._resolveAxis(body, 'y', stepDy, bmin, bmax);
    
    const dFlat = Math.abs(resFlat.x - flatX) + Math.abs(resFlat.z - flatZ);
    const dStep = Math.abs(body.pos.x - flatX) + Math.abs(body.pos.z - flatZ);
    
    // If step was successful and went further than flat
    if (dStep > dFlat && sign > 0) {
      if (stepBx !== 0 || stepBz !== 0) {
        body.hitWall = true;
        body.wallNormal.set(stepBx, 0, stepBz).normalize();
      }
    } else {
      // Reject step, use flat results
      body.pos.set(resFlat.x, resFlat.y, resFlat.z);
      if (flatBx !== 0 || flatBz !== 0) {
        body.hitWall = true;
        body.wallNormal.set(flatBx, 0, flatBz).normalize();
      }
    }
  }

  moveBody(body, dt) {
    const speed = body.vel.length();
    const minStep = Math.max(0.2, body.halfW * 0.8);
    let steps = Math.max(1, Math.ceil((speed * dt) / minStep));
    if (steps > 10) steps = 10;
    
    const sdt = dt / steps;
    const dx = body.vel.x * sdt;
    const dy = body.vel.y * sdt;
    const dz = body.vel.z * sdt;

    const wasOnGround = body.onGround;
    body.onGround = false;
    body.hitWall = false;
    body.hitCeiling = false;
    body.wallNormal.set(0, 0, 0);
    body.landVel = 0;

    for (let i = 0; i < steps; i++) {
      // Horizontal movement
      const canStep = (wasOnGround || body.onGround || body.alwaysStep) && body.stepHeight > 0;
      this._moveHoriz(body, dx, dz, canStep);
      
      // Vertical movement
      body.pos.y += dy;
      body._bx = 0;
      body._bz = 0;
      
      const bmin = new THREE.Vector3(body.pos.x - body.halfW, body.pos.y, body.pos.z - body.halfW);
      const bmax = new THREE.Vector3(body.pos.x + body.halfW, body.pos.y + body.height, body.pos.z + body.halfW);
      
      if (dy !== 0) {
        const sign = this._resolveAxis(body, 'y', dy, bmin, bmax);
        if (sign > 0) {
          body.onGround = true;
          if (body.vel.y < 0 && body.landVel === 0) {
            body.landVel = body.vel.y;
          }
          body.vel.y = 0;
        } else if (sign < 0) {
          body.hitCeiling = true;
          body.vel.y = 0;
        }
      }
    }

    // Ground snapping
    if (!body.noSnap && wasOnGround && !body.onGround && body.vel.y <= 0) {
      const gY = this.groundBelow(body.pos.x, body.pos.y + 0.1, body.pos.z, body.stepHeight + 0.2);
      if (gY !== null) {
        body.pos.y = gY;
        body.onGround = true;
        body.vel.y = 0;
      }
    }
  }

  raycast(origin, dir, maxDist = 100, filter = null) {
    let closest = null;
    let minDist = maxDist;

    for (const box of this.boxes) {
      if (filter) {
        if (typeof filter === 'function' && filter(box)) continue;
        if (filter === 1 && box.data && box.data.noCollide) continue; // fallback for mask 1?
      }

      let tmin = -Infinity;
      let tmax = Infinity;
      let nmin = new THREE.Vector3();

      let intersected = true;
      
      for (let i = 0; i < 3; i++) {
        const axis = i === 0 ? 'x' : i === 1 ? 'y' : 'z';
        const invD = 1.0 / dir[axis];
        let t0 = (box.min[axis] - origin[axis]) * invD;
        let t1 = (box.max[axis] - origin[axis]) * invD;
        
        let n0 = new THREE.Vector3(); n0[axis] = -1;
        let n1 = new THREE.Vector3(); n1[axis] = 1;

        if (invD < 0) {
          const temp = t0; t0 = t1; t1 = temp;
          const tempN = n0; n0 = n1; n1 = tempN;
        }

        if (t0 > tmin) { 
          tmin = t0; 
          nmin.copy(n0); 
        }
        if (t1 < tmax) { 
          tmax = t1; 
        }

        if (tmax < tmin) {
          intersected = false;
          break;
        }
      }

      if (intersected && tmax >= 0 && tmax >= tmin && tmin < minDist) {
        const dist = tmin < 0 ? 0 : tmin;
        if (dist < minDist) {
          minDist = dist;
          closest = {
            dist: minDist,
            point: origin.clone().add(dir.clone().multiplyScalar(minDist)),
            normal: nmin,
            box: box
          };
        }
      }
    }
    
    return closest;
  }

  groundBelow(x, y, z, maxDist) {
    const origin = new THREE.Vector3(x, y, z);
    const dir = new THREE.Vector3(0, -1, 0);
    const hit = this.raycast(origin, dir, maxDist);
    return hit ? hit.point.y : null;
  }

  hasLineOfSight(from, to, filter = null) {
    const dir = new THREE.Vector3().subVectors(to, from);
    const dist = dir.length();
    dir.normalize();
    const hit = this.raycast(from, dir, dist, filter);
    return hit === null;
  }
}

export function createBody(pos, halfW, height, stepHeight = 0.55) {
  let p = new THREE.Vector3();
  let hw = 0.36;
  let h = 1.85;
  let sh = 0.55;

  if (typeof pos === 'number' && typeof halfW === 'number' && typeof height === 'number') {
    // createBody(x, y, z, halfW, height, stepHeight)
    p.set(pos, halfW, height);
    hw = typeof arguments[3] === 'number' ? arguments[3] : 0.36;
    h = typeof arguments[4] === 'number' ? arguments[4] : 1.85;
    sh = typeof arguments[5] === 'number' ? arguments[5] : 0.55;
  } else if (pos && typeof pos === 'object') {
    if (pos.pos !== undefined) {
      // createBody({ pos, halfW, height, stepHeight })
      const o = pos;
      if (Array.isArray(o.pos)) p.set(o.pos[0], o.pos[1], o.pos[2]);
      else if (o.pos && typeof o.pos.x === 'number') p.copy(o.pos);
      hw = o.halfW !== undefined ? o.halfW : hw;
      h = o.height !== undefined ? o.height : h;
      sh = o.stepHeight !== undefined ? o.stepHeight : sh;
    } else if (Array.isArray(pos)) {
      p.set(pos[0], pos[1], pos[2]);
      hw = halfW !== undefined ? halfW : hw;
      h = height !== undefined ? height : h;
      sh = stepHeight !== undefined ? stepHeight : sh;
    } else if (typeof pos.x === 'number') {
      p.copy(pos);
      hw = halfW !== undefined ? halfW : hw;
      h = height !== undefined ? height : h;
      sh = stepHeight !== undefined ? stepHeight : sh;
    }
  }

  return {
    pos: p,
    vel: new THREE.Vector3(),
    halfW: hw,
    height: h,
    stepHeight: sh,
    onGround: false,
    hitWall: false,
    hitCeiling: false,
    wallNormal: new THREE.Vector3(),
    landVel: 0,
    noSnap: false,
    alwaysStep: false,
    _bx: 0,
    _bz: 0
  };
}

export const noShoot = box => box.data.noShoot === true;
