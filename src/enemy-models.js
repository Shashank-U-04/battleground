import * as THREE from 'three';
import { INK, gt, setFill } from './renderer.js';

export const ENEMY_TYPES = {
  grunt: { hp:100, speed:3.5, weapon:'rifle', range:28, stop:16, keep:7, burst:3, burstInt:0.15, cool:[1.6,2.6], dmg:6, spread:0.055, pspeed:36, score:100, scale:1, name:'GRUNT', hat:'cap', build:{bodyW:1, headS:1, limbR:0.032} },
  rusher: { hp:70, speed:5.5, weapon:'blade', lunge:2.9, reach:3, standoff:1.9, cool:[1,1.5], dmg:15, score:120, scale:0.95, name:'RUSHER', hat:'band', build:{bodyW:0.82, headS:0.95, limbR:0.027} },
  heavy: { hp:320, speed:2.0, weapon:'shotgun', range:18, stop:9, keep:5, pellets:7, cool:[2.4,3.2], dmg:5, spread:0.13, pspeed:32, score:260, scale:1.25, name:'HEAVY', hat:'helmet', build:{bodyW:1.55, headS:0.88, limbR:0.05} },
  sniper: { hp:60, speed:2.0, weapon:'sniper', range:90, stop:90, keep:15, aimTime:1.7, cool:[2.8,3.8], dmg:22, spread:0.006, pspeed:95, score:180, scale:1.05, name:'SNIPER', stationary:true, hat:'hood', build:{bodyW:0.78, headS:0.92, limbR:0.026} },
  shield: { hp:150, speed:2.5, weapon:'pistol', range:20, stop:8, keep:4, burst:2, burstInt:0.2, cool:[1.8,2.6], dmg:5, spread:0.06, pspeed:34, score:200, scale:1.05, name:'SHIELDBEARER', hat:'helmet', shield:true, build:{bodyW:1.2, headS:0.9, limbR:0.042} },
  bomber: { hp:26, speed:4.5, weapon:'bomb', fuseRange:3.4, fuse:1.05, blast:4.2, dmg:24, score:150, scale:0.9, name:'INK BOMB', ink:2, model:'bomber' },
  flyer: { hp:40, speed:4.5, weapon:'dive', dmg:10, cool:[2.8,4.2], score:140, scale:1.5, name:'PAPER WASP', flying:true, model:'flyer' },
  boss: { hp:2600, speed:2.5, weapon:'boss', bossKind:'doodler', range:32, stop:6, keep:0, cool:[2.6,3.6], dmg:22, score:2500, scale:2.7, name:'THE DOODLER', boss:true, ink:2, hat:'crown', build:{bodyW:1.35, headS:1.15, limbR:0.06} },
  eraser: { hp:3400, speed:3.0, weapon:'boss', bossKind:'eraser', range:30, stop:8, keep:0, cool:[2.2,3.2], dmg:26, score:3200, scale:2.6, name:'THE ERASER', boss:true, ink:5, model:'blob', build:{} },
  inkblot: { hp:3000, speed:2.2, weapon:'boss', bossKind:'inkblot', range:34, stop:10, keep:0, cool:[2.4,3.4], dmg:20, score:3600, scale:2.4, name:'THE INKBLOT', boss:true, ink:2, model:'blob', build:{} }
};

ENEMY_TYPES.boss_doodler = ENEMY_TYPES.boss;
ENEMY_TYPES.boss_eraser = ENEMY_TYPES.eraser;
ENEMY_TYPES.boss_inkblot = ENEMY_TYPES.inkblot;

const createLimb = (mat, radius, len) => {
  const path = new THREE.LineCurve3(new THREE.Vector3(0,0,0), new THREE.Vector3(0, -len, 0));
  const geom = new THREE.TubeGeometry(path, 4, radius, 6, false);
  return new THREE.Mesh(geom, mat);
};

export function buildHumanoid(inkMat, detailMat, config) {
  const root = new THREE.Group();
  const parts = {};
  const J = {};
  const face = { eyes: new THREE.Group(), xeyes: new THREE.Group() };
  const tip = new THREE.Object3D();
  const hit = [];
  
  const build = config.build || { bodyW:1, headS:1, limbR:0.032 };
  
  if (config.shield) {
    hit.push(['shield', 0.66]);
  }
  hit.push(['head', 0.3], ['torso', 0.33], ['hips', 0.2]);
  hit.push(['armL', 0.11], ['armR', 0.11], ['foreL', 0.1], ['foreR', 0.1]);
  hit.push(['legL', 0.13], ['legR', 0.13], ['shinL', 0.11], ['shinR', 0.11]);

  const hips = new THREE.Group();
  hips.position.y = 0.86;
  root.add(hips);
  J.hips = hips;
  parts.hips = hips;

  const torso = new THREE.Group();
  torso.position.y = 0.26;
  hips.add(torso);
  J.torso = torso;
  parts.torso = torso;
  
  const torsoGeom = new THREE.SphereGeometry(1, 16, 16);
  torsoGeom.scale(0.15 * build.bodyW, 0.15, 0.095 * build.bodyW);
  const torsoMesh = new THREE.Mesh(torsoGeom, inkMat);
  torso.add(torsoMesh);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.1), inkMat);
  neck.position.y = 0.56;
  torso.add(neck);

  const headG = new THREE.Group();
  headG.position.y = 0.62;
  torso.add(headG);
  J.headG = headG;
  
  const headMeshG = new THREE.Group();
  headG.add(headMeshG);
  parts.head = headMeshG;

  const headGeom = new THREE.SphereGeometry(1, 16, 16);
  headGeom.scale(0.1375 * build.headS, 0.15 * build.headS, 0.125 * build.headS);
  const headMesh = new THREE.Mesh(headGeom, inkMat);
  headMeshG.add(headMesh);

  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.02), detailMat);
  eyeL.position.set(-0.05, 0.02, 0.12 * build.headS);
  const eyeR = eyeL.clone();
  eyeR.position.x = 0.05;
  face.eyes.add(eyeL, eyeR);
  headMeshG.add(face.eyes);
  face.xeyes.visible = false;
  headMeshG.add(face.xeyes);
  
  if (config.hat) {
    const hat = new THREE.Group();
    hat.position.y = 0.14 * build.headS;
    if (config.hat === 'cap') {
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), inkMat);
      const brim = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.02, 0.2), inkMat);
      brim.position.set(0, 0, 0.1);
      hat.add(top, brim);
    } else if (config.hat === 'helmet') {
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), inkMat);
      hat.add(top);
    }
    headMeshG.add(hat);
  }

  const armL = new THREE.Group();
  armL.position.set(-0.26 * build.bodyW, 0.46, 0);
  torso.add(armL);
  J.armL = armL;
  parts.armL = armL;
  armL.add(createLimb(inkMat, build.limbR, 0.3));

  const foreL = new THREE.Group();
  foreL.position.y = -0.3;
  armL.add(foreL);
  J.foreL = foreL;
  parts.foreL = foreL;
  foreL.add(createLimb(inkMat, build.limbR, 0.28));
  
  const armR = new THREE.Group();
  armR.position.set(0.26 * build.bodyW, 0.46, 0);
  torso.add(armR);
  J.armR = armR;
  parts.armR = armR;
  armR.add(createLimb(inkMat, build.limbR, 0.3));

  const foreR = new THREE.Group();
  foreR.position.y = -0.3;
  armR.add(foreR);
  J.foreR = foreR;
  parts.foreR = foreR;
  foreR.add(createLimb(inkMat, build.limbR, 0.28));

  const gun = new THREE.Group();
  gun.position.y = -0.28;
  foreR.add(gun);
  J.gun = gun;
  
  const weaponBox = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.3), inkMat);
  gun.add(weaponBox);
  tip.position.set(0, 0, 0.15);
  gun.add(tip);

  const legL = new THREE.Group();
  legL.position.set(-0.13 * build.bodyW, -0.02, 0);
  hips.add(legL);
  J.legL = legL;
  parts.legL = legL;
  legL.add(createLimb(inkMat, build.limbR, 0.42));

  const shinL = new THREE.Group();
  shinL.position.y = -0.42;
  legL.add(shinL);
  J.shinL = shinL;
  parts.shinL = shinL;
  shinL.add(createLimb(inkMat, build.limbR, 0.42));

  const legR = new THREE.Group();
  legR.position.set(0.13 * build.bodyW, -0.02, 0);
  hips.add(legR);
  J.legR = legR;
  parts.legR = legR;
  legR.add(createLimb(inkMat, build.limbR, 0.42));

  const shinR = new THREE.Group();
  shinR.position.y = -0.42;
  legR.add(shinR);
  J.shinR = shinR;
  parts.shinR = shinR;
  shinR.add(createLimb(inkMat, build.limbR, 0.42));

  if (config.shield) {
    const shieldG = new THREE.Group();
    shieldG.position.set(0, 0, 0.2);
    torso.add(shieldG);
    J.shieldG = shieldG;
    const shieldMesh = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.3, 0.07), inkMat);
    shieldG.add(shieldMesh);
    parts.shield = shieldG;
  }

  const hitSpheres = hit.map(h => ({
    part: h[0],
    r: h[1],
    bone: J[h[0]] || root,
    obj: new THREE.Object3D()
  }));

  if (config.scale) root.scale.setScalar(config.scale);

  return { root, parts, J, tip, face, hitSpheres };
}

export function buildBlob(inkMat, detailMat, config, isBoss) {
  const root = new THREE.Group();
  const parts = {};
  const J = {};
  const face = { eyes: new THREE.Group(), xeyes: new THREE.Group() };
  const tip = new THREE.Object3D();
  const hit = [];
  
  hit.push(['torso', 0.5]);

  const torso = new THREE.Group();
  torso.position.y = 0.5;
  root.add(torso);
  J.torso = torso;
  parts.torso = torso;

  const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), inkMat);
  torso.add(mesh);
  
  face.eyes.position.set(0, 0.1, 0.48);
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.04), detailMat);
  eyeL.position.x = -0.15;
  const eyeR = eyeL.clone();
  eyeR.position.x = 0.15;
  face.eyes.add(eyeL, eyeR);
  torso.add(face.eyes);
  
  face.xeyes.visible = false;
  torso.add(face.xeyes);

  torso.add(tip);

  const hitSpheres = hit.map(h => ({
    part: h[0],
    r: h[1],
    bone: J[h[0]] || root,
    obj: new THREE.Object3D()
  }));

  if (config.scale) root.scale.setScalar(config.scale);
  return { root, parts, J, tip, face, hitSpheres };
}

export function buildFlyer(inkMat, detailMat, config) {
  const root = new THREE.Group();
  const parts = {};
  const J = {};
  const face = { eyes: new THREE.Group(), xeyes: new THREE.Group() };
  const tip = new THREE.Object3D();
  const hit = [];
  
  hit.push(['torso', 0.3]);

  const torso = new THREE.Group();
  torso.position.y = 1;
  root.add(torso);
  J.torso = torso;
  parts.torso = torso;

  const bodyMesh = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 16), inkMat);
  bodyMesh.rotation.x = -Math.PI / 2;
  torso.add(bodyMesh);

  face.eyes.position.set(0, 0.05, 0.28);
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.02), detailMat);
  eyeL.position.x = -0.06;
  const eyeR = eyeL.clone();
  eyeR.position.x = 0.06;
  face.eyes.add(eyeL, eyeR);
  torso.add(face.eyes);

  torso.add(tip);

  const hitSpheres = hit.map(h => ({
    part: h[0],
    r: h[1],
    bone: J[h[0]] || root,
    obj: new THREE.Object3D()
  }));

  if (config.scale) root.scale.setScalar(config.scale);
  return { root, parts, J, tip, face, hitSpheres };
}
