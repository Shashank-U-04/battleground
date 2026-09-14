import * as THREE from 'three';

export class Nav {
    constructor(world) {
        this.world = world;
        this.grid = null;
        this.cellSize = 2;
        this.built = false;
        this.min = new THREE.Vector3();
        this.max = new THREE.Vector3();
        this.width = 0;
        this.depth = 0;
    }

    buildGrid(min, max) {
        this.build({ min, max });
    }

    build(bounds) {
        if (!bounds) return;
        if (bounds.min && bounds.min.x !== undefined) this.min.copy(bounds.min);
        if (bounds.max && bounds.max.x !== undefined) this.max.copy(bounds.max);
        
        // Expand slightly and align to cell size
        this.min.x = Math.floor(this.min.x / this.cellSize) * this.cellSize;
        this.min.z = Math.floor(this.min.z / this.cellSize) * this.cellSize;
        this.max.x = Math.ceil(this.max.x / this.cellSize) * this.cellSize;
        this.max.z = Math.ceil(this.max.z / this.cellSize) * this.cellSize;

        this.width = Math.round((this.max.x - this.min.x) / this.cellSize);
        this.depth = Math.round((this.max.z - this.min.z) / this.cellSize);

        this.grid = new Array(this.width * this.depth);
        const maxY = this.max.y + 10;
        const origin = new THREE.Vector3();
        const dir = new THREE.Vector3(0, -1, 0);

        for (let z = 0; z < this.depth; z++) {
            for (let x = 0; x < this.width; x++) {
                origin.set(
                    this.min.x + x * this.cellSize + this.cellSize * 0.5,
                    maxY,
                    this.min.z + z * this.cellSize + this.cellSize * 0.5
                );

                const hit = this.world.raycast(origin, dir, 1000, 1);
                
                const cell = {
                    walkable: false,
                    y: 0,
                    x: x,
                    z: z
                };

                if (hit) {
                    // Check if it's clear enough above ground
                    origin.y = hit.point.y + 1; // 1 unit above ground
                    const hitUp = this.world.raycast(origin, new THREE.Vector3(0, 1, 0), 2, 1);
                    if (!hitUp) {
                        cell.walkable = true;
                        cell.y = hit.point.y;
                    }
                }

                this.grid[z * this.width + x] = cell;
            }
        }
        this.built = true;
    }

    getCell(x, z) {
        if (x < 0 || x >= this.width || z < 0 || z >= this.depth) return null;
        return this.grid[z * this.width + x];
    }

    findPath(from, to) {
        if (!this.built) return null;

        const startX = Math.floor((from.x - this.min.x) / this.cellSize);
        const startZ = Math.floor((from.z - this.min.z) / this.cellSize);
        const goalX = Math.floor((to.x - this.min.x) / this.cellSize);
        const goalZ = Math.floor((to.z - this.min.z) / this.cellSize);

        const startCell = this.getCell(startX, startZ);
        const goalCell = this.getCell(goalX, goalZ);

        if (!startCell || !goalCell) return null;

        const openList = [];
        const closedSet = new Set();
        const cameFrom = new Map();
        
        const gScore = new Map();
        const fScore = new Map();

        const getHeuristic = (a, b) => {
            const dx = Math.abs(a.x - b.x);
            const dz = Math.abs(a.z - b.z);
            return 1 * (dx + dz) + (1.414 - 2 * 1) * Math.min(dx, dz);
        };

        const cellId = (c) => `${c.x},${c.z}`;

        openList.push(startCell);
        gScore.set(cellId(startCell), 0);
        fScore.set(cellId(startCell), getHeuristic(startCell, goalCell));

        let iterations = 0;
        const maxIterations = 2000;

        let closestCell = startCell;
        let minH = getHeuristic(startCell, goalCell);

        while (openList.length > 0 && iterations < maxIterations) {
            iterations++;
            
            // Find lowest fScore
            let currentIdx = 0;
            let currentF = fScore.get(cellId(openList[0])) || Infinity;
            for (let i = 1; i < openList.length; i++) {
                const f = fScore.get(cellId(openList[i])) || Infinity;
                if (f < currentF) {
                    currentIdx = i;
                    currentF = f;
                }
            }

            const current = openList[currentIdx];
            
            if (current === goalCell) {
                return this._reconstructPath(cameFrom, current, goalCell, true);
            }

            openList.splice(currentIdx, 1);
            closedSet.add(cellId(current));

            const dirs = [
                {x: 0, z: -1, cost: 1}, {x: 1, z: -1, cost: 1.414},
                {x: 1, z: 0, cost: 1},  {x: 1, z: 1, cost: 1.414},
                {x: 0, z: 1, cost: 1},  {x: -1, z: 1, cost: 1.414},
                {x: -1, z: 0, cost: 1}, {x: -1, z: -1, cost: 1.414}
            ];

            for (const dir of dirs) {
                const nx = current.x + dir.x;
                const nz = current.z + dir.z;
                
                const neighbor = this.getCell(nx, nz);
                if (!neighbor || !neighbor.walkable) continue;
                
                if (Math.abs(neighbor.y - current.y) > 2) continue;

                if (Math.abs(dir.x) === 1 && Math.abs(dir.z) === 1) {
                    const n1 = this.getCell(current.x + dir.x, current.z);
                    const n2 = this.getCell(current.x, current.z + dir.z);
                    if (!n1 || !n1.walkable || !n2 || !n2.walkable) continue;
                }

                if (closedSet.has(cellId(neighbor))) continue;

                const tentativeG = (gScore.get(cellId(current)) || Infinity) + dir.cost;
                
                if (!openList.includes(neighbor)) {
                    openList.push(neighbor);
                } else if (tentativeG >= (gScore.get(cellId(neighbor)) || Infinity)) {
                    continue;
                }

                cameFrom.set(cellId(neighbor), current);
                gScore.set(cellId(neighbor), tentativeG);
                
                const h = getHeuristic(neighbor, goalCell);
                if (h < minH) {
                    minH = h;
                    closestCell = neighbor;
                }
                
                fScore.set(cellId(neighbor), tentativeG + h);
            }
        }

        if (closestCell !== startCell) {
            return this._reconstructPath(cameFrom, closestCell, goalCell, false);
        }

        return null;
    }

    _reconstructPath(cameFrom, current, goal, isComplete) {
        const path = [];
        const cellId = (c) => `${c.x},${c.z}`;
        
        while (current) {
            const wx = this.min.x + current.x * this.cellSize + this.cellSize * 0.5;
            const wz = this.min.z + current.z * this.cellSize + this.cellSize * 0.5;
            path.unshift(new THREE.Vector3(wx, current.y, wz));
            const cid = cellId(current);
            current = cameFrom.get(cid);
        }
        
        path.complete = isComplete;
        return path;
    }
}
