/* src/utils.js — Math helpers, spring system, constants */
import * as THREE from 'three';

// ── Constants ──
export const TAU = Math.PI * 2;

// ── Math helpers ──
export const clamp = (n, lo, hi) => n < lo ? lo : n > hi ? hi : n;
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, rate, dt) => lerp(a, b, 1 - Math.exp(-rate * dt));
export const rand = (lo = 0, hi = 1) => lo + Math.random() * (hi - lo);
export const randInt = (lo, hi) => Math.floor(rand(lo, hi + 1));
export const pick = arr => arr[Math.floor(Math.random() * arr.length)];

/** Wrap an angle difference into [-PI, PI] */
export const wrapAngle = a => ((a + Math.PI) % TAU + TAU) % TAU - Math.PI;

/** Shortest-path angular lerp */
export const lerpAngle = (a, b, t) => a + wrapAngle(b - a) * t;

// ── Spring (1D critically-damped) ──
export class Spring {
  constructor(k = 120, d = 14) {
    this.value = 0;
    this.vel = 0;
    this.target = 0;
    this.k = k;
    this.d = d;
  }
  update(dt) {
    const steps = dt > 0.02 ? 3 : 1;
    const sub = dt / steps;
    for (let i = 0; i < steps; i++) {
      const f = (this.target - this.value) * this.k - this.vel * this.d;
      this.vel += f * sub;
      this.value += this.vel * sub;
    }
    return this.value;
  }
  kick(v) { this.vel += v; }
  set(v) { this.value = v; this.vel = 0; }
}

// ── Spring (3D) ──
export class Spring3 {
  constructor(k = 120, d = 14) {
    this.value = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.k = k;
    this.d = d;
    this._f = new THREE.Vector3();
  }
  update(dt) {
    const steps = dt > 0.02 ? 3 : 1;
    const sub = dt / steps;
    for (let i = 0; i < steps; i++) {
      this._f.copy(this.target).sub(this.value).multiplyScalar(this.k)
        .addScaledVector(this.vel, -this.d);
      this.vel.addScaledVector(this._f, sub);
      this.value.addScaledVector(this.vel, sub);
    }
    return this.value;
  }
  kick(x, y, z) { this.vel.x += x; this.vel.y += y; this.vel.z += z; }
}

// ── Cylinder/line visualisation helper ──
const _up = new THREE.Vector3(0, 1, 0);
const _quat = new THREE.Quaternion();

/**
 * Position and orient a cylinder mesh so it spans from `a` to `b`.
 */
export function alignCylinder(mesh, a, b, radius = 1) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  if (len < 1e-5) { mesh.visible = false; return; }
  mesh.visible = true;
  dir.divideScalar(len);
  mesh.position.copy(a).addScaledVector(dir, len * 0.5);
  mesh.quaternion.setFromUnitVectors(_up, dir);
  mesh.scale.set(radius, len, radius);
}

// ── Reusable vectors ──
export const _v1 = new THREE.Vector3();
export const _v2 = new THREE.Vector3();
export const _v3 = new THREE.Vector3();
export const _v4 = new THREE.Vector3();
export const _q1 = new THREE.Quaternion();
export const _m1 = new THREE.Matrix4();
