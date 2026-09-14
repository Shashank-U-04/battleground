import * as THREE from 'three';
import { Renderer } from './renderer.js';
import { World } from './physics.js';
import { Input } from './input.js';
import { D } from './audio.js';
import { Player } from './player.js';
import { Weapons } from './weapons.js';
import { EnemyManager } from './enemies.js';
import { Effects } from './effects.js';
import { HUD } from './hud.js';
import { Nav } from './nav.js';
import { Game } from './game.js';
import { buildDistrict } from './maps/district.js';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('c') || document.getElementById('game-canvas');
  const hudEl = document.getElementById('hud');
  
  const renderer = new Renderer(canvas);
  const world = new World();
  const input = new Input(canvas);
  const hud = new HUD(hudEl);
  const effects = new Effects(renderer.scene);
  
  const mapData = buildDistrict(renderer.scene, world);
  world.finalize();
  
  const nav = new Nav(world);
  if (mapData.bounds) {
    nav.buildGrid(mapData.bounds.min, mapData.bounds.max);
  }
  
  const ctx = {
    scene: renderer.scene,
    world,
    renderer,
    camera: renderer.camera,
    input,
    effects,
    hud,
    nav,
    mapData,
    targets: () => [ctx.player]
  };
  window.ctx = ctx;
  
  const player = new Player(ctx.camera, world, input, effects, hud);
  ctx.player = player;
  
  const enemies = new EnemyManager(ctx);
  ctx.enemies = enemies;
  
  const weapons = new Weapons(ctx.camera, ctx.scene, world, player, enemies, effects, hud);
  player.weapons = weapons; // Link weapons to player
  ctx.weapons = weapons;
  
  const game = new Game(ctx);
  ctx.game = game;
  
  // Wire up callbacks
  enemies.onKill = game.addKill.bind(game);
  
  // Input setup
  input.onLockChange = (locked) => {
    if (locked && game.state === 'menu') {
      game.start();
    } else if (!locked && game.state === 'playing') {
      hud.showPause(); // Optional if we want a pause state, or just let HUD handle pointer unlock
    }
  };

  canvas.addEventListener('click', () => {
    if (game.state === 'menu' || game.state === 'playing') {
      input.requestLock();
    }
  });
  
  hud.onStart = () => {
    if (game.state === 'menu') {
      game.start();
    } else if (game.state === 'dead') {
      game.restart();
    }
  };
  
  hud.onSettingsChange = (settings) => {
    if (settings.sensitivity !== undefined) {
      input.mouseSens = settings.sensitivity * 0.0022;
      input.sensitivity = settings.sensitivity;
    }
    if (settings.invertY !== undefined) input.invertY = settings.invertY;
    if (settings.volume !== undefined) D.setVolume(settings.volume);
  };
  
  let lastTime = 0;
  function loop(timestamp) {
    requestAnimationFrame(loop);
    
    // Max step 100ms
    const rawDt = Math.min((timestamp - lastTime) / 1000, 0.1);
    lastTime = timestamp;
    
    const dt = game.state === 'playing' ? rawDt * game.getTimeScale() : rawDt;
    
    input.update(dt);
    
    if (input.anyInput && !D.ctx) {
      D.init();
      input.anyInput = false;
    }
    if (D.ctx) {
      D.resume();
    }
    
    if (game.state === 'playing') {
      player.update(dt);
      weapons.update(dt, input);
      enemies.update(dt);
      game.update(dt);
    }
    
    effects.update(dt);
    
    // Update audio listener
    if (D.ctx) {
      const fwd = new THREE.Vector3();
      renderer.camera.getWorldDirection(fwd);
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(fwd, up).normalize();
      D.setListener(player.eye, right);
    }
    
    renderer.render(timestamp / 1000, {
      hurt: player.getHurt ? player.getHurt() : 0,
      flash: player.getFlash ? player.getFlash() : 0,
      slow: 0,
      lowHp: player.getLowHp ? player.getLowHp() : 0
    });
    
    if (game.state === 'dead') {
      if (input.anyPressed()) {
        game.restart();
      }
    }
  }
  
  hud.showMenu();
  game.state = 'menu';
  requestAnimationFrame(loop);
});
