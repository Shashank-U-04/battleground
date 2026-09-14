import * as THREE from 'three';
import { clamp, rand, randInt, pick } from './utils.js';
import { gt, INK } from './renderer.js';
import { D } from './audio.js';

export class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.state = 'menu'; // 'menu', 'playing', 'dead'
    this.wave = 0;
    this.score = 0;
    this.bestScore = parseInt(localStorage.getItem('dd_bestScore')) || 0;
    this.kills = 0;
    this.combo = { count: 0, timer: 0, multiplier: 1 };
    
    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.waveDelay = 0;
    
    this.hitstopT = 0;
    this.hitstopScale = 1;
    
    this.pickupTimer = 30;
    this.pickups = [];
    
    this.pickupGeo = new THREE.BoxGeometry(1, 1, 1);
    this.pickupMat = gt(3, 1); // some ink color
  }

  start() {
    this.state = 'playing';
    this.score = 0;
    this.kills = 0;
    this.wave = 0;
    this.combo = { count: 0, timer: 0, multiplier: 1 };
    this.ctx.enemies.clear();
    
    this.ctx.player.spawn(this.ctx.mapData.playerStart);
    this.ctx.player.health = this.ctx.player.maxHealth;
    
    this.ctx.input.requestLock();
    this.ctx.hud.hideMenu();
    this.ctx.hud.show();
    
    this.clearPickups();
    this.pickupTimer = rand(30, 45);
    
    this.beginWave(1);
  }

  beginWave(n) {
    this.wave = n;
    this.spawnQueue = [];
    
    // Base count: 4 + wave * 2 (capped at 24)
    let count = Math.min(4 + this.wave * 2, 24);
    
    if (this.wave === 5) {
      this.spawnQueue.push('boss_doodler');
      count = Math.max(0, count - 5);
    } else if (this.wave === 10) {
      this.spawnQueue.push('boss_eraser');
      count = Math.max(0, count - 10);
    } else if (this.wave === 15) {
      this.spawnQueue.push('boss_inkblot');
      count = Math.max(0, count - 15);
    } else if (this.wave > 15 && this.wave % 5 === 0) {
      const bosses = ['boss_doodler', 'boss_eraser', 'boss_inkblot'];
      this.spawnQueue.push(pick(bosses));
      count = Math.max(0, count - 10);
    }

    const types = ['grunt'];
    if (this.wave >= 3) types.push('rusher');
    if (this.wave >= 4) types.push('sniper');
    if (this.wave >= 5) types.push('heavy');
    if (this.wave >= 6) types.push('shield');
    if (this.wave >= 7) types.push('bomber');
    if (this.wave >= 8) types.push('flyer');

    for (let i = 0; i < count; i++) {
      this.spawnQueue.push(pick(types));
    }
    
    this.ctx.hud.showMessage(`WAVE ${this.wave}`, `Incoming...`);
    D.play('waveStart', this.ctx.player.eye, 1.0, 1.0);
    
    this.spawnTimer = 2.0;
  }

  spawnNext() {
    if (this.spawnQueue.length === 0) return;
    
    const spawns = this.ctx.mapData.spawns;
    if (!spawns || spawns.length === 0) return;
    
    let bestSpawn = null;
    let maxDist = 0;
    
    // Find a spawn point reasonably far from player
    for (let i = 0; i < 5; i++) {
      const sp = pick(spawns);
      const dist = sp.distanceTo(this.ctx.player.pos);
      if (dist > 15) {
        bestSpawn = sp;
        break;
      }
      if (dist > maxDist) {
        maxDist = dist;
        bestSpawn = sp;
      }
    }
    
    if (!bestSpawn) bestSpawn = pick(spawns);
    
    const type = this.spawnQueue.shift();
    this.ctx.enemies.spawn(type, bestSpawn);
    
    this.spawnTimer = clamp(2.0 - this.wave * 0.1, 0.8, 2.0);
  }

  spawnPickup() {
    if (this.pickups.length >= 3) return;
    const points = this.ctx.mapData.pickups;
    if (!points || points.length === 0) return;
    
    const pos = pick(points);
    const mesh = new THREE.Mesh(this.pickupGeo, this.pickupMat);
    mesh.position.copy(pos);
    mesh.position.y += 0.5; // hover slightly
    this.ctx.scene.add(mesh);
    
    this.pickups.push({ mesh, pos, bob: rand(0, Math.PI * 2) });
  }
  
  clearPickups() {
    for (let p of this.pickups) {
      this.ctx.scene.remove(p.mesh);
    }
    this.pickups = [];
  }

  update(dt) {
    if (this.state !== 'playing') return;
    
    if (this.hitstopT > 0) {
      this.hitstopT -= dt;
    }
    
    // Combo
    if (this.combo.timer > 0) {
      this.combo.timer -= dt;
      if (this.combo.timer <= 0) {
        this.combo.count = 0;
        this.combo.multiplier = 1;
        this.ctx.hud.updateCombo(this.combo);
      }
    }
    
    // Spawning
    if (this.spawnQueue.length > 0) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) {
        this.spawnNext();
      }
    } else if (this.ctx.enemies.active.length === 0) {
      if (this.waveDelay <= 0) {
        this.waveDelay = 4.0;
      } else {
        this.waveDelay -= dt;
        if (this.waveDelay <= 0) {
          this.beginWave(this.wave + 1);
        }
      }
    }
    
    // Pickups
    this.pickupTimer -= dt;
    if (this.pickupTimer <= 0) {
      this.spawnPickup();
      this.pickupTimer = rand(30, 45);
    }
    
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i];
      p.bob += dt * 2;
      p.mesh.position.y = p.pos.y + 0.5 + Math.sin(p.bob) * 0.2;
      p.mesh.rotation.y += dt;
      
      if (this.ctx.player.pos.distanceTo(p.pos) < 2) {
        this.ctx.player.addAmmo(50); // example ammo
        D.play('pickup', p.pos, 1.0, 1.0);
        this.ctx.scene.remove(p.mesh);
        this.pickups.splice(i, 1);
      }
    }
    
    if (this.ctx.player.health <= 0 && this.state !== 'dead') {
      this.gameOver();
    }
  }

  addScore(points, label) {
    this.combo.count++;
    this.combo.timer = 3.0;
    this.combo.multiplier = clamp(1 + (this.combo.count - 1) * 0.1, 1, 3);
    
    const actual = Math.floor(points * this.combo.multiplier);
    this.score += actual;
    
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
    }
    
    this.ctx.hud.addScore(actual, label);
    this.ctx.hud.updateCombo(this.combo);
    this.ctx.hud.updateScore(this.score, this.bestScore);
  }

  addKill(enemy, hitInfo, gibbed) {
    this.kills++;
    this.addScore(enemy.T.score || 100, enemy.T.name);
    
    if (enemy.T.isBoss) {
      D.play('waveClear', this.ctx.player.eye, 1.0, 1.0);
      this.ctx.hud.announce('BOSS DEFEATED', 'Bonus points!');
      this.addScore(1000, 'Boss Kill');
    }
    
    this.ctx.player.weapons.addFocus(10);
    this.ctx.hud.updateKills(this.kills);
  }

  hitstop(dur, scale) {
    this.hitstopT = dur;
    this.hitstopScale = scale;
  }

  getTimeScale() {
    return this.hitstopT > 0 ? this.hitstopScale : 1.0;
  }

  gameOver() {
    this.state = 'dead';
    this.ctx.input.exitLock();
    this.ctx.hud.showGameOver(this.score, this.wave, this.kills);
    localStorage.setItem('dd_bestScore', this.bestScore);
  }

  restart() {
    this.state = 'menu';
    this.ctx.enemies.clear();
    this.clearPickups();
    this.ctx.hud.showMenu();
  }
}
