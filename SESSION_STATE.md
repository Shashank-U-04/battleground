# Doodle District — Session State & Game Plan

**Last Updated:** 2026-09-14  
**Project:** Doodle District (FPS Game replica of `https://doodleshooter.vercel.app/`)  
**Repository Location:** `c:\Users\Shashank U\Documents\GitHub\battleground`  
**Status:** **BUILD COMPLETE & VERIFIED** (`vite build` -> 0 errors, production build verified in `dist/`)

---

## 1. Original Game Blueprint & Reference Plan

*(Preserved exactly as provided in user specification)*

### A. Dependencies & Setup Reference
```bash
npm create vite@latest doodle-shooter -- --template react
cd doodle-shooter
npm install three @types/three @react-three/fiber @react-three/drei @react-three/rapier @react-three/postprocessing postprocessing zustand lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

### B. Target Architecture & Directory Layout
```text
src/
├── components/
│   ├── canvas/
│   │   ├── GameCanvas.jsx       # Canvas, Lights, Post-processing pass
│   │   ├── SketchPass.jsx       # Sobel outline + grid/paper overlay shader
│   │   └── World.jsx            # Low-poly platforms, ramps, trees, jump pads
│   ├── player/
│   │   ├── PlayerController.jsx # Rapier dynamic rigid body + input handling
│   │   ├── GrappleHook.jsx      # Raycast + spring constraint logic
│   │   ├── Weapons.jsx          # Viewmodel, recoil kick, muzzle effects
│   │   └── Crosshair.jsx        # Dynamic spread & hitmarker UI
│   ├── enemies/
│   │   ├── EnemySpawner.jsx     # Wave manager & spawn boundaries
│   │   └── ScribbleBot.jsx      # Nav logic, hurtboxes, ragdoll/erase effect
│   └── ui/
│       ├── HUD.jsx              # Health bar, wave counter, weapon wheel
│       └── GameOverModal.jsx    # "ERASED" screen with high scores
├── hooks/
│   ├── useKeyboard.js           # WASD, Space, Shift, C, Q, E bindings
│   └── useMouseCapture.js       # PointerLock API integration
└── store/
    └── useGameStore.js          # Wave stats, score, ammo, inventory
```

### C. Core Engine Reference Implementation

#### State Management (`src/store/useGameStore.js`)
Handles wave progression, score, player health, and active weapon state.
- `gameState`: `'menu' | 'playing' | 'dead'`
- `wave`, `kills`, `score`, `bestScore`, `health`, `activeWeapon`, `ammo`
- `takeDamage`, `addKill`, `restartGame`

#### First-Person Controller with Rapier Physics Concept
- WASD motion + mouse delta yaw/pitch camera tracking
- Dynamic capsule collider with velocity manipulation and jumping impulse
- Camera translation synchronization

#### The Sketched / Doodle Shader
- Edge-detection outlines layered over graph-paper / notebook background
- Geometry silhouette passes with full-screen Sobel post-processing effect
- Graph notebook grid styling:
```css
.doodle-bg {
  background-color: #f7f5ed;
  background-image: 
    linear-gradient(#e0ddd0 1px, transparent 1px),
    linear-gradient(90deg, #e0ddd0 1px, transparent 1px);
  background-size: 24px 24px;
}
```

#### HUD & Recreated "ERASED" Screen (`GameOverModal`)
- Styled notebook modal on player defeat:
  - Title: "ERASED"
  - Summary: waves survived, kills count, final score, best score
  - Replay button: "MAIN MENU" / "Click (or press Space) to draw again"

#### Step-by-Step Implementation Roadmap
1. **Step 1: Input & Rigidbody Base**
   - PointerLock with mouse delta yaw/pitch tracking.
   - Dynamic capsule collider for WASD navigation.
2. **Step 2: Physics Arena (The "District")**
   - Low-poly platforms, ramps, and bouncy pads using `<RigidBody type="fixed">`.
   - Flat-shaded, off-white materials (`color="#ffffff"`, `roughness={1}`) so ink outlines carry the art style.
3. **Step 3: Gunplay & Grapple**
   - Hitscan raycasting from center of camera: `raycaster.setFromCamera(new THREE.Vector2(0, 0), camera)`.
   - Grapple hook: raycast on right-click/Q/E; if striking anchor, apply continuous impulse until release.
4. **Step 4: Enemy Wave Loop**
   - Spawn enemy bots on wave intervals.
   - Move toward player using lookAt and linear velocity.
   - Erase enemies upon raycast hit and award score points.

---

## 2. Live Site Analysis (`https://doodleshooter.vercel.app/`)

When inspecting the actual deployed game from `https://doodleshooter.vercel.app/` (`game.7LCERBLR.js` and `style.A4A8BF44.css`), we discovered the true underlying engine architecture:
- **Vanilla Three.js (v0.170.0)** without React/R3F overhead, giving maximum frame rates and zero React render lag.
- **Custom Spatial Hash AABB Physics Engine** (`World` + `createBody`), featuring continuous collision resolution, ground snapping, wall jumps, slope stepping, and raycasting.
- **Full-Screen Post-Processing Shader (`Renderer`)**:
  - Inverse-depth Laplacian Sobel edge detection (scale-invariant outlines).
  - View-space normal boundary edge detection.
  - Surface-anchored cross-hatching with LOD power-of-two quantization.
  - Procedural paper texture with noise grain, ruled notebook lines, and red margin.
  - Ink color palette: Blue (`#1a30c0`), Red (`#d02030`), Black (`#2e3342`), Orange (`#eb8c14`), Green (`#1f994d`), Pink (`#e666a8`).
  - Screen effects: hurt red vignette, low-hp pulsing, muzzle flashes, and slow-mo desaturation.
- **Procedural Web Audio Engine (`D`)**:
  - 100% synthesized audio via AudioContext oscillators, biquad filters, and noise buffers (no external audio files).
  - 3D spatial audio with listener position and stereo panning.
  - Complete sound bank: gunshots, shotgun blast, sniper fire, katana swing/hit, parry, enemy vocalizations, gibbing, footstep loops, jump/land, grapple fire/reeling, and chip-tune music.
- **Multi-weapon arsenal**: Rifle, Shotgun, Sniper with ADS zoom and custom scope overlay, Katana with parry/deflect/focus slash, Grenades.
- **Wave AI & Spawning**: Grunt, Rusher, Heavy, Sniper, Shieldbearer, Ink Bomb, Paper Wasp (Flyer), and Bosses (The Doodler, The Eraser, The Inkblot).

---

## 3. Implemented Files and Codebase Architecture

```text
c:\Users\Shashank U\Documents\GitHub\battleground/
├── index.html                    # Canvas #c, HUD container, Patrick Hand & Caveat fonts
├── package.json                  # Three.js ^0.170.0, Vite ^6.0.0
├── vite.config.js                # Vite build config with esnext target
├── style.css                     # Complete HUD stylesheet (crosshairs, health, ammo, killfeed, scope, etc.)
├── SESSION_STATE.md              # Persistent session state & game plan log
└── src/
    ├── main.js                   # Main game entry point, loop, initialization
    ├── renderer.js               # WebGLRenderer, custom doodle post-processing shader, gt() material factory
    ├── physics.js                # AABB physics engine, spatial hash grid, sweep-and-resolve collisions
    ├── input.js                  # Mouse (pointer lock), keyboard (WASD/1-4/Q/E/etc.), gamepad controller
    ├── audio.js                  # Procedural Web Audio API sound generator and synthesizer
    ├── player.js                 # First-person player controller, movement, grapple, health, camera springs
    ├── weapons.js                # Viewmodels, hitscan gunplay, katana parry, ADS zoom, reload logic
    ├── enemies.js                # Enemy manager, wave AI, states (spawn, hunt, stunned, dead), ragdoll/gibbing
    ├── enemy-models.js           # Procedural mesh generation for humanoid, flyer, and blob bots + bosses
    ├── projectiles.js            # InstancedMesh bullet rendering, deflection, explosive blast physics
    ├── effects.js                # Instanced particles, blood splatters, decals, debris physics, screen shake
    ├── hud.js                    # HTML overlay management, ammo tally, health bar, killfeed, scope
    ├── nav.js                    # Grid-based A* navigation and pathfinding
    ├── utils.js                  # Math helpers, Spring / Spring3 physics, clamp/lerp/damp utilities
    └── maps/
        ├── common.js             # Fluent map builder API, geometry batching, collider registration
        └── district.js           # "Doodle District" multi-level urban map with buildings, ramps, grapple rings
```

---

## 4. Log of Tasks Performed

1. **Analysis & Source Extraction**: Extracted and analyzed live game source code (`game.7LCERBLR.js`, `style.A4A8BF44.css`, `index.html`) from `https://doodleshooter.vercel.app/`.
2. **Implementation Plan & Architecture Agreement**: Created detailed plan comparing vanilla Three.js vs R3F; user approved the plan.
3. **Project Setup**:
   - Initialized `package.json` with Three.js and Vite.
   - Built `index.html` with correct `#c` canvas element and Google Fonts.
   - Ported full CSS styling (`style.css`) matching original doodle HUD and modal visuals.
4. **Core Engine Construction**:
   - `src/utils.js`: Math utilities, 1D & 3D Springs for recoil and viewbobbing.
   - `src/renderer.js`: Custom multi-pass post-processing pipeline with Sobel depth outlines, world-anchored hatching, and notebook paper simulation.
   - `src/physics.js`: Spatial hash grid, multi-step collision resolver with step-up and ground snap, raycaster.
   - `src/input.js`: PointerLock API, keyboard mapping, gamepad stick dead-zones and acceleration.
   - `src/audio.js`: Synthesized Web Audio API sound suite with 3D falloff and chip-tune background music.
5. **Game Systems**:
   - `src/player.js`: Dynamic body movement (sprint, crouch, slide, jump, wall-jump, dash, grapple hook).
   - `src/weapons.js`: Viewmodels, firing mechanics, ADS, ammo/reserve, Katana parry and focus slash.
   - `src/enemies.js` & `src/enemy-models.js`: Procedural enemy meshes (7 normal types + 3 boss types) with combat AI and dismemberment effects.
   - `src/projectiles.js`: InstancedMesh projectile system with katana deflection and explosive blasts.
   - `src/effects.js`: Instanced stroke particles, blood splatters, decals, debris physics, screen shake.
   - `src/hud.js`: Complete UI overlay, health bars, tally marks, crosshair spread, sniper scope, boss bar.
   - `src/nav.js`: A* grid pathfinding for AI bot navigation.
   - `src/maps/district.js`: Built complete "Doodle District" geometry with central arena, multi-level buildings, bridges, and sky decoration.
6. **Integration & Bug Fixing**:
   - Resolved module import references across `game.js`, `maps/common.js`, and `district.js`.
   - Enhanced `gt()` in `renderer.js` to support both object and positional parameter signatures.
   - Upgraded `createBody()` in `physics.js` to support Vector3, object, array, and positional argument forms.
   - Synchronized Vector3 property access (`.x, .y, .z`) in `player.js` instead of array indices.
   - Added method aliases to `HUD` and `Audio` for seamless caller interoperability.
   - Added boss aliases in `enemy-models.js`.
   - Verified canvas ID synchronization (`#c`) in `main.js`.
7. **Build Verification**:
   - Executed `npx vite build` successfully with 0 errors. All assets bundled cleanly into `dist/`.

---

## 5. How to Run & Verify

To launch the local development server:
```bash
npm run dev
```
Open the displayed local URL (typically `http://localhost:5173`) in any modern browser.

### Key Controls:
- **WASD / Arrows**: Move
- **Mouse**: Look
- **Left Click**: Fire / Swing
- **Right Click**: Aim Down Sights (Rifle/Shotgun/Sniper)
- **Space**: Jump (supports wall jumping)
- **Shift**: Sprint (Slide into crouch)
- **C / Ctrl**: Crouch / Slide
- **Q / E**: Grapple Hook (pulls toward surfaces)
- **X / Alt**: Dash
- **1, 2, 3, 4 / Scroll**: Weapon Slots (1: Rifle, 2: Shotgun, 3: Sniper, 4: Katana)
- **R**: Reload
- **G**: Grenade

---

## 6. Future Roadmap & Session Continuation

When resuming work in future sessions, refer to these planned expansion items:
- **Phase 7: Additional Maps**
  - Implement `src/maps/jungle.js` ("Doodle Jungle" with temple ruins, canopies, vines, custom paper style).
  - Implement `src/maps/mexico.js` ("Doodle Mexico" with sun-baked plaza, piñatas, taco stands, mariachi tune).
- **Phase 8: Multiplayer Networking**
  - Integrate PeerJS for peer-to-peer multiplayer lobbies and arena deathmatch modes.
