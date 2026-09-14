import * as THREE from 'three';
import { createMapBuilder } from './common.js';

export function buildDistrict(scene, world) {
    const b = createMapBuilder(scene, world);

    // Initial Config
    b.L.playerStart.set(0, 0, 42);
    b.L.bounds = { 
        min: { x: -55, y: -1, z: -55 }, 
        max: { x: 55, y: 56, z: 55 } 
    };

    // Global settings options
    const wallOpts = { ink: 0 };
    const floorOpts = { ink: 1, fill: true };
    const propOpts = { ink: 2, fill: false };
    const railOpts = { ink: 0, fill: true };

    // --- Ground Floor ---
    b.slab(-55, -55, 55, 55, -1, 1, floorOpts);
    b.collider(0, 56, 0, 110, 2, 110); // ceiling collider

    // --- Outer Walls ---
    b.wallX(-55, 55, -55, 0, 18, 2, [], wallOpts);
    b.wallX(-55, 55, 55, 0, 18, 2, [], wallOpts);
    b.wallZ(-55, -55, 55, 0, 18, 2, [], wallOpts);
    b.wallZ(55, -55, 55, 0, 18, 2, [], wallOpts);

    // --- Central Arena (-7 to 7, -7 to 7) ---
    // Multi-level platforms
    b.slab(-7, -7, 7, 7, 4, 1, floorOpts);
    b.slab(-5, -5, 5, 5, 8, 1, floorOpts);
    b.slab(-3, -3, 3, 3, 12, 1, floorOpts);
    b.slab(-2, -2, 2, 2, 16, 1, floorOpts);
    
    // Pillars around perimeter
    for(let i=0; i<8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const px = Math.cos(angle) * 7;
        const pz = Math.sin(angle) * 7;
        b.box(px, 0, pz, 1, 16, 1, wallOpts);
    }

    // Tall central pillar
    b.box(5.5, 0, 5.5, 2, 16, 2, wallOpts);
    b.slab(4.5, 4.5, 6.5, 6.5, 16, 1, floorOpts); // Platform on top
    // Connecting beams
    b.box(2.5, 15, 5.5, 4, 1, 1, wallOpts);
    
    // Railings on level 4
    b.rail(-7, -7, 7, -7, 5, railOpts);
    b.rail(-7, 7, 7, 7, 5, railOpts);
    b.rail(-7, -7, -7, 7, 5, railOpts);
    b.rail(7, -7, 7, 7, 5, railOpts);
    
    // Spiral stairs in center
    b.stairs(-7, 0, 0, '+x', 4, 2, wallOpts);
    b.stairs(-5, 4, 0, '+x', 4, 2, wallOpts);
    b.stairs(-3, 8, 0, '+x', 4, 2, wallOpts);

    // --- Northeast Compound (24 to 44, 24 to 44) ---
    // 3-story building
    // Floor slabs
    b.slab(24, 24, 44, 44, 4, 1, floorOpts);
    b.slab(24, 24, 44, 44, 8, 1, floorOpts);
    b.slab(24, 24, 44, 44, 12, 1, floorOpts);
    
    // Walls with doorways
    b.wallX(24, 44, 24, 0, 12, 1, [[30, 34, 0, 3], [30, 34, 4, 7], [30, 34, 8, 11]], wallOpts);
    b.wallX(24, 44, 44, 0, 12, 1, [[30, 34, 0, 3]], wallOpts);
    b.wallZ(24, 24, 44, 0, 12, 1, [[30, 34, 0, 3]], wallOpts);
    b.wallZ(44, 24, 44, 0, 12, 1, [[30, 34, 0, 3]], wallOpts);

    // Internal stairs
    b.stairs(40, 0, 40, '-z', 4, 2, wallOpts);
    b.stairs(40, 4, 34, '+z', 4, 2, wallOpts);
    b.stairs(40, 8, 40, '-z', 4, 2, wallOpts);
    
    // External ramp
    b.stairs(20, 0, 34, '+x', 4, 2, wallOpts);

    // --- Southwest Compound (-43 to -25, 4 to 20) ---
    b.slab(-43, 4, -25, 20, 4, 1, floorOpts);
    b.slab(-43, 4, -25, 20, 8, 1, floorOpts);
    b.slab(-43, 4, -25, 20, 12, 1, floorOpts);
    
    b.wallX(-43, -25, 4, 0, 12, 1, [[-36, -32, 0, 3], [-36, -32, 4, 7], [-36, -32, 8, 11]], wallOpts);
    b.wallX(-43, -25, 20, 0, 12, 1, [[-36, -32, 0, 3]], wallOpts);
    b.wallZ(-43, 4, 20, 0, 12, 1, [], wallOpts);
    b.wallZ(-25, 4, 20, 0, 12, 1, [[8, 12, 0, 3], [8, 12, 4, 7], [8, 12, 8, 11]], wallOpts);
    
    // Fire escape
    b.stairs(-45, 0, 10, '+z', 4, 2, wallOpts);
    b.stairs(-45, 4, 16, '-z', 4, 2, wallOpts);
    b.stairs(-45, 8, 10, '+z', 4, 2, wallOpts);
    
    // Bridge to central area
    b.slab(-25, 6, -7, 10, 8, 1, floorOpts);
    b.rail(-25, 6, -7, 6, 9, railOpts);
    b.rail(-25, 10, -7, 10, 9, railOpts);

    // --- South wall area (-52 to 52, around z=-30) ---
    b.slab(-50, -32, 50, -28, 7, 1, floorOpts);
    for(let i = -48; i <= 48; i += 12) {
        b.box(i, 0, -30, 2, 7, 2, wallOpts);
    }
    b.stairs(-52, 0, -30, '+x', 7, 4, wallOpts);
    b.stairs(52, 0, -30, '-x', 7, 4, wallOpts);

    // Buildings along south (z=-45 area)
    b.slab(-40, -50, -20, -40, 7, 1, floorOpts);
    b.wallX(-40, -20, -40, 0, 7, 1, [], wallOpts);
    
    b.slab(-10, -50, 10, -40, 11, 1, floorOpts);
    b.wallX(-10, 10, -40, 0, 11, 1, [], wallOpts);
    b.cyl(0, 11, -45, 2, 6, wallOpts);
    
    b.slab(20, -50, 40, -40, 7, 1, floorOpts);
    b.wallX(20, 40, -40, 0, 7, 1, [], wallOpts);
    
    b.stairs(-20, 7, -45, '+x', 4, 2, wallOpts);
    b.stairs(20, 7, -45, '-x', 4, 2, wallOpts);

    // --- North area (z=34-46) ---
    // Decorative blocks and props
    b.box(-30, 0, 40, 4, 4, 4, { ink: 2, fill: true }); // cover block
    b.box(-20, 0, 38, 6, 2, 2, { ink: 3, fill: true });
    
    // Large pencil prop
    b.cyl(-40, 0, 40, 2, 10, { ink: 4 });
    
    // Lampposts
    b.cyl(-10, 0, 35, 0.5, 8, wallOpts);
    b.ring(-10, 8, 35, 'y');
    b.cyl(10, 0, 35, 0.5, 8, wallOpts);
    b.ring(10, 8, 35, 'y');

    // --- Scattered Grapple Rings ---
    b.ring(5.5, 17, 5.5, 'y');
    b.ring(34, 13, 34, 'y');
    b.ring(-34, 13, 12, 'y');
    b.ring(0, 12, -45, 'y');

    // --- Spawns & Pickups ---
    b.spawn(0, 0, 45);
    b.spawn(34, 0, 34);
    b.spawn(-34, 0, 12);
    b.spawn(0, 8, -30);
    b.spawn(-40, 0, -20);
    b.spawn(40, 0, -20);
    b.spawn(-45, 8, -45);
    b.spawn(45, 8, -45);
    b.spawn(0, 12, 0); // Arena top
    b.spawn(34, 12, 34); // NE compound top

    b.pickup(0, 17, 0);
    b.pickup(34, 13, 34);
    b.pickup(-34, 13, 12);
    b.pickup(0, 12, -45);
    b.pickup(0, 8, -30);

    // --- Animated Planes & Sky ---
    b.planes(5, 20, 15, { ink: 1 });
    b.planes(3, 30, 25, { ink: 2 });
    b.birds(10, 40, 30, { ink: 0 });

    // The Sun
    b.sphere(-90, 110, -160, 20, { ink: 1, fill: true });
    
    // Clouds
    b.sphere(50, 60, -100, 10, { ink: 0, fill: false });
    b.sphere(60, 65, -95, 12, { ink: 0, fill: false });
    b.sphere(40, 58, -105, 8, { ink: 0, fill: false });
    
    b.sphere(-60, 70, 80, 15, { ink: 0, fill: false });
    b.sphere(-45, 65, 85, 10, { ink: 0, fill: false });

    return b.finish();
}
