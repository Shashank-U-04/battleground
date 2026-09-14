import * as THREE from 'three';
import { clamp, damp, rand, Spring, Spring3, TAU } from './utils.js';
import { INK, gt } from './renderer.js';
import { D } from './audio.js';
import { noShoot } from './physics.js';

export const WEAPON_DEFS = {
  rifle: { name:'Rifle', ammo:30, reserve:120, fireRate:0.1, dmg:18, spread:0.02, recoilUp:1.8, recoilSide:0.4, reloadTime:1.5, auto:true, hitscan:true, slot:1, pos: new THREE.Vector3(0.25, -0.22, -0.45) },
  shotgun: { name:'Shotgun', ammo:6, reserve:30, fireRate:0.7, dmg:12, spread:0.09, pellets:8, recoilUp:4, recoilSide:1.2, reloadTime:2.2, auto:false, hitscan:true, slot:2, pumpTime:0.35, pos: new THREE.Vector3(0.28, -0.25, -0.5) },
  sniper: { name:'Sniper', ammo:5, reserve:20, fireRate:1.2, dmg:85, spread:0.002, recoilUp:6, recoilSide:2, reloadTime:2.8, auto:false, hitscan:true, slot:3, adsZoom:-25, adsSpread:0.001, pos: new THREE.Vector3(0.22, -0.2, -0.5) },
  katana: { name:'Katana', ammo:Infinity, reserve:Infinity, fireRate:0.35, dmg:55, reach:3.5, arc:Math.cos(0.8), recoilUp:0, recoilSide:0, reloadTime:0, auto:false, hitscan:false, slot:4, swingDur:0.3, pos: new THREE.Vector3(0.3, -0.3, -0.4) }
};

export class Weapons {
  constructor(camera, scene, world, player, enemies, effects, hud) {
    this.camera = camera;
    this.scene = scene;
    this.world = world;
    this.player = player;
    this.enemies = enemies;
    this.effects = effects;
    this.hud = hud;

    this.slots = [
      { def: WEAPON_DEFS.rifle, ammo: WEAPON_DEFS.rifle.ammo, reserve: WEAPON_DEFS.rifle.reserve, cooldown: 0, reloading: false, reloadT: 0 },
      { def: WEAPON_DEFS.shotgun, ammo: WEAPON_DEFS.shotgun.ammo, reserve: WEAPON_DEFS.shotgun.reserve, cooldown: 0, reloading: false, reloadT: 0 },
      { def: WEAPON_DEFS.sniper, ammo: WEAPON_DEFS.sniper.ammo, reserve: WEAPON_DEFS.sniper.reserve, cooldown: 0, reloading: false, reloadT: 0 },
      { def: WEAPON_DEFS.katana, ammo: Infinity, reserve: Infinity, cooldown: 0, reloading: false, reloadT: 0 }
    ];
    this.activeSlot = 0;
    
    this.ads = false;
    this.adsT = 0;
    this.swingT = 0;
    
    this.focusMeter = 0;
    this.focusReady = false;
    
    this.grenades = 3;
    this.grenadeCool = 0;

    this.viewmodel = new THREE.Group();
    this.camera.add(this.viewmodel);
    
    this.swaySpring = new Spring3(100, 15);
    this.kickSpring = new Spring3(150, 15);
    
    this.meshes = [];
    this.buildMeshes();
    this.switchWeapon(0);
  }

  buildMeshes() {
    const box = (w, h, d, c, x, y, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), gt({ ink: c }));
      m.position.set(x, y, z);
      return m;
    };
    const cyl = (r, h, c, x, y, z, rx = Math.PI/2) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 8), gt({ ink: c }));
      m.position.set(x, y, z);
      m.rotation.x = rx;
      return m;
    };

    const rifle = new THREE.Group();
    rifle.add(box(0.06, 0.08, 0.45, INK.BLUE, 0, 0, 0));
    rifle.add(cyl(0.018, 0.3, INK.BLUE, 0, 0, -0.35));
    rifle.add(box(0.04, 0.12, 0.06, INK.BLACK, 0, -0.1, 0.05));
    rifle.add(box(0.05, 0.07, 0.15, INK.BLACK, 0, -0.02, 0.3));
    this.meshes.push(rifle);

    const shotgun = new THREE.Group();
    shotgun.add(box(0.07, 0.1, 0.5, INK.BLUE, 0, 0, 0));
    shotgun.add(cyl(0.025, 0.4, INK.BLUE, 0, 0, -0.45));
    shotgun.add(box(0.06, 0.06, 0.15, INK.BLACK, 0, -0.08, -0.25));
    this.meshes.push(shotgun);

    const sniper = new THREE.Group();
    sniper.add(box(0.05, 0.08, 0.55, INK.BLUE, 0, 0, 0));
    sniper.add(cyl(0.015, 0.7, INK.BLUE, 0, 0, -0.6));
    sniper.add(box(0.04, 0.04, 0.12, INK.BLACK, 0, 0.06, 0));
    const bp1 = cyl(0.005, 0.1, INK.BLACK, -0.03, -0.08, -0.4, 0); bp1.rotation.z = Math.PI/6;
    const bp2 = cyl(0.005, 0.1, INK.BLACK, 0.03, -0.08, -0.4, 0); bp2.rotation.z = -Math.PI/6;
    sniper.add(bp1, bp2);
    this.meshes.push(sniper);

    const katana = new THREE.Group();
    katana.add(box(0.02, 0.015, 0.85, INK.BLACK, 0, 0, -0.4));
    katana.add(box(0.12, 0.03, 0.02, INK.BLACK, 0, 0, 0));
    katana.add(box(0.03, 0.025, 0.22, INK.BLACK, 0, 0, 0.12));
    this.meshes.push(katana);

    this.meshes.forEach(m => {
      m.visible = false;
      this.viewmodel.add(m);
    });
  }

  getActiveWeapon() {
    return this.slots[this.activeSlot].def;
  }

  switchWeapon(idx) {
    if (idx === this.activeSlot && this.meshes[idx].visible) return;
    
    this.slots[this.activeSlot].reloading = false;
    this.meshes[this.activeSlot].visible = false;
    
    this.activeSlot = idx;
    this.meshes[this.activeSlot].visible = true;
    
    if (D.switchWeapon) D.switchWeapon();
    
    this.ads = false;
    if (this.hud && this.hud.setWeaponSlots) {
      this.hud.setWeaponSlots(this.slots.map(s => s.def), this.activeSlot);
    }
    this.updateHUDAmmo();
  }

  updateHUDAmmo() {
    if (!this.hud || !this.hud.setAmmo) return;
    const slot = this.slots[this.activeSlot];
    this.hud.setAmmo(slot.ammo, slot.reserve);
  }

  addAmmo(type, amount) {
    for (const slot of this.slots) {
      if (slot.def.name.toLowerCase() === type.toLowerCase()) {
        slot.reserve += amount;
        if (this.activeSlot === this.slots.indexOf(slot)) this.updateHUDAmmo();
        break;
      }
    }
  }

  addFocus(amount) {
    this.focusMeter = clamp(this.focusMeter + amount, 0, 1);
    if (this.focusMeter >= 1) {
      this.focusReady = true;
    }
    if (this.hud && this.hud.setFocus) this.hud.setFocus(this.focusMeter, this.focusReady);
  }

  update(dt, input) {
    // 1. Weapon switching
    if (input.pressed('1')) this.switchWeapon(0);
    if (input.pressed('2')) this.switchWeapon(1);
    if (input.pressed('3')) this.switchWeapon(2);
    if (input.pressed('4')) this.switchWeapon(3);

    // Scroll wheel (assuming input.wheelDir exists)
    if (input.wheelDir) {
      let next = (this.activeSlot + Math.sign(input.wheelDir)) % this.slots.length;
      if (next < 0) next += this.slots.length;
      this.switchWeapon(next);
      input.wheelDir = 0; // consume
    }

    const slot = this.slots[this.activeSlot];
    const def = slot.def;

    if (slot.cooldown > 0) slot.cooldown -= dt;
    if (this.grenadeCool > 0) this.grenadeCool -= dt;
    if (this.swingT > 0) this.swingT -= dt;

    // 2. ADS
    const canADS = def.name === 'Rifle' || def.name === 'Sniper' || def.name === 'Shotgun';
    this.ads = canADS && input.down('aim');
    this.adsT = damp(this.adsT, this.ads ? 1 : 0, 15, dt);

    if (this.player && this.player.fovSpring) {
      const zoom = (def.adsZoom && this.ads) ? def.adsZoom : 0;
      this.player.fovSpring.target = zoom; // assuming base FOV is added elsewhere, or target is offset
    }

    if (this.hud && this.hud.setSniperScope) {
      this.hud.setSniperScope(def.name === 'Sniper' && this.adsT > 0.8);
    }
    
    let spread = def.spread || 0;
    if (this.ads && def.adsSpread !== undefined) spread = def.adsSpread;
    else if (this.ads) spread *= 0.5;

    if (this.hud && this.hud.setCrosshairSpread) {
      this.hud.setCrosshairSpread(spread * 1000);
      if (this.hud.setCrosshairStyle) {
        this.hud.setCrosshairStyle(def.name === 'Sniper' && this.adsT > 0.5 ? 'none' : 'default');
      }
    }

    // 4. Reload
    if (def.ammo !== Infinity) {
      if ((input.pressed('reload') || (slot.ammo <= 0 && (input.pressed('fire') || input.down('fire')))) 
          && slot.reserve > 0 && slot.ammo < def.ammo && !slot.reloading) {
        slot.reloading = true;
        slot.reloadT = def.reloadTime;
        if (D.reload) D.reload();
        if (this.hud && this.hud.setReloading) this.hud.setReloading(true);
      }

      if (slot.reloading) {
        slot.reloadT -= dt;
        if (slot.reloadT <= 0) {
          slot.reloading = false;
          const needed = def.ammo - slot.ammo;
          const take = Math.min(needed, slot.reserve);
          slot.ammo += take;
          slot.reserve -= take;
          this.updateHUDAmmo();
          if (this.hud && this.hud.setReloading) this.hud.setReloading(false);
        }
      }
    }

    // 3. Firing
    const fireInput = def.auto ? input.down('fire') : input.pressed('fire');
    
    if (fireInput && slot.cooldown <= 0 && !slot.reloading) {
      if (slot.ammo > 0 || def.ammo === Infinity) {
        this.fire(def, slot, spread);
      }
    }

    // 5. Katana focus
    if (def.name === 'Katana' && this.focusReady && input.pressed('focus')) { // Assuming 'focus' input exists
      this.focusReady = false;
      this.focusMeter = 0;
      if (this.hud && this.hud.setFocus) this.hud.setFocus(this.focusMeter, this.focusReady);
      this.fireKatanaSpecial(def);
    }

    // 6. Grenade
    if (input.pressed('grenade') && this.grenades > 0 && this.grenadeCool <= 0) {
      this.grenades--;
      this.grenadeCool = 1.0;
      this.spawnGrenade();
    }

    // 7. Viewmodel animation
    this.swaySpring.update(dt);
    this.kickSpring.update(dt);

    const t = performance.now() * 0.001;
    const isWalking = this.player && this.player.onGround && this.player.vel && (Math.abs(this.player.vel.x) > 1 || Math.abs(this.player.vel.z) > 1);
    
    const bobMag = isWalking ? 0.015 : 0.005;
    const bobSpeed = isWalking ? 12 : 3;
    const bobX = Math.cos(t * bobSpeed) * bobMag;
    const bobY = Math.sin(t * bobSpeed * 2) * bobMag;
    
    const basePos = def.pos.clone();
    const centerPos = new THREE.Vector3(0, -0.15, -0.3); // ADS pos
    
    const finalPos = basePos.clone().lerp(centerPos, this.adsT);
    finalPos.add(this.swaySpring.value);
    finalPos.add(this.kickSpring.value);
    finalPos.x += bobX;
    finalPos.y += bobY;

    this.viewmodel.position.copy(finalPos);
    
    // Rotation
    this.viewmodel.rotation.set(0, 0, 0);
    
    // Sway based on mouse movement (assuming player.yawDelta / pitchDelta or simple heuristic)
    if (this.player && this.player.yawDelta) {
      this.viewmodel.rotation.y = clamp(this.player.yawDelta * -0.1, -0.1, 0.1);
      this.viewmodel.rotation.x = clamp(this.player.pitchDelta * -0.1, -0.1, 0.1);
    }

    // Sprint tilt (if player is sprinting)
    if (this.player && this.player.sprinting && !this.ads && isWalking && def.name !== 'Katana') {
      this.viewmodel.rotation.z = -0.3;
      this.viewmodel.position.x += 0.1;
      this.viewmodel.position.y -= 0.1;
    }
    
    // Reload animation
    if (slot.reloading) {
      const rt = slot.reloadT / def.reloadTime; // 1 to 0
      this.viewmodel.rotation.x -= Math.sin(rt * Math.PI) * 0.5;
      this.viewmodel.rotation.y += Math.sin(rt * Math.PI) * 0.3;
      this.viewmodel.position.y -= Math.sin(rt * Math.PI) * 0.1;
    }

    // Katana swing animation
    if (def.name === 'Katana' && this.swingT > 0) {
      const st = 1 - (this.swingT / def.swingDur);
      this.viewmodel.rotation.y = Math.sin(st * Math.PI) * -1.5;
      this.viewmodel.rotation.x = Math.sin(st * Math.PI) * -1.0;
      this.viewmodel.position.z -= Math.sin(st * Math.PI) * 0.5;
    }
  }

  fire(def, slot, spread) {
    slot.cooldown = def.fireRate;
    if (def.ammo !== Infinity) {
      slot.ammo--;
      this.updateHUDAmmo();
    }

    if (this.kickSpring) {
      this.kickSpring.kick(0, 0, 0.05); // kick back
      this.kickSpring.target.set(0, 0, 0);
    }
    if (this.player && this.player.recoilSpring) {
      this.player.recoilSpring.kick(def.recoilUp, rand(-def.recoilSide, def.recoilSide));
    }

    const camPos = this.camera.position;
    const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);

    if (def.hitscan) {
      const count = def.pellets || 1;
      for (let i = 0; i < count; i++) {
        const rayDir = camDir.clone();
        if (spread > 0) {
          rayDir.add(new THREE.Vector3(rand(-spread, spread), rand(-spread, spread), rand(-spread, spread)));
        }
        rayDir.normalize();

        const eHit = this.enemies && this.enemies.raycast ? this.enemies.raycast(camPos, rayDir) : null;
        const wHit = this.world && this.world.raycast ? this.world.raycast(camPos, rayDir, 100, noShoot) : null;

        let hitPoint = null;
        let hitNormal = null;

        if (eHit && (!wHit || eHit.dist < wHit.dist)) {
          if (this.enemies.damage) this.enemies.damage(eHit.enemy, def.dmg, { source: 'gun', dir: rayDir, point: eHit.point, crit: eHit.part === 'head' });
          hitPoint = eHit.point;
          hitNormal = eHit.normal;
        } else if (wHit) {
          hitPoint = wHit.point;
          hitNormal = wHit.normal;
          if (this.effects && this.effects.bulletImpact) {
            this.effects.bulletImpact(hitPoint, hitNormal);
          }
        } else {
          hitPoint = camPos.clone().add(rayDir.multiplyScalar(50));
        }
      }
    } else if (def.name === 'Katana') {
      this.swingT = def.swingDur;
      if (this.enemies && this.enemies.inArc) {
        const inArc = this.enemies.inArc(camPos, camDir, def.reach, def.arc);
        let hitSomething = false;
        for (const e of inArc) {
          if (this.enemies.damage) {
            this.enemies.damage(e.enemy, def.dmg, { source: 'katana', dir: camDir, point: e.enemy.root ? e.enemy.root.position : camPos, crit: false });
            hitSomething = true;
          }
        }
        if (hitSomething && this.enemies.ctx.game) {
          this.enemies.ctx.game.hitstop(0.04, 0.05); // 40ms freeze
        }
      }
      if (this.effects && this.effects.katanaDeflect) {
        this.effects.katanaDeflect(camPos, def.reach);
      }
    }

    if (this.effects && this.effects.muzzleFlash && def.hitscan) {
      this.effects.muzzleFlash(this.viewmodel.children[this.activeSlot]);
    }

    // Audio
    if (def.name === 'Shotgun') {
      if (D.shotgunFire) D.shotgunFire();
    } else if (def.name === 'Sniper') {
      if (D.sniperFire) D.sniperFire();
    } else if (def.name === 'Katana') {
      if (D.katanaSwing) D.katanaSwing();
    } else {
      if (D.shot) D.shot();
    }
  }

  fireKatanaSpecial(def) {
    this.swingT = def.swingDur * 1.5;
    
    // time slow down effect using global or effects
    if (this.effects && this.effects.timeSlow) {
      this.effects.timeSlow(2.0); // 2 seconds slow
    }

    const camPos = this.camera.position;
    const camDir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);

    if (this.enemies && this.enemies.inArc) {
      const inArc = this.enemies.inArc(camPos, camDir, def.reach * 1.5, Math.cos(1.2)); // wider arc, longer reach
      for (const e of inArc) {
        if (this.enemies.damage) this.enemies.damage(e.enemy, def.dmg * 3, { source: 'katana', dir: camDir, point: e.enemy.root ? e.enemy.root.position : camPos, crit: true }); // 3x dmg
      }
    }
    
    if (D.katanaSpecial) D.katanaSpecial();
  }

  spawnGrenade() {
    const pos = this.camera.position.clone();
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    dir.add(new THREE.Vector3(0, 0.2, 0)).normalize();
    
    // Fire projectile through world or effects
    if (this.world && this.world.spawnGrenade) {
      this.world.spawnGrenade(pos, dir.multiplyScalar(20)); // arbitrary throw speed
    } else if (this.effects && this.effects.spawnGrenade) {
      this.effects.spawnGrenade(pos, dir.multiplyScalar(20));
    }
    
    if (D.throwGrenade) D.throwGrenade();
    
    if (this.hud && this.hud.setGrenades) {
      this.hud.setGrenades(this.grenades);
    }
  }
  addFocus(amount) {
    this.focusMeter = Math.min(1, (this.focusMeter || 0) + (amount / 100));
    this.focusReady = this.focusMeter >= 1;
    if (this.hud && this.hud.setFocus) this.hud.setFocus(this.focusMeter, this.focusReady);
  }
}
