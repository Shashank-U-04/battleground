export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = {};
    this.prev = {};
    this.keys = {};
    this.mouseBtns = {};
    
    this.move = { x: 0, y: 0 };
    this.look = { x: 0, y: 0 };
    
    this.mx = 0;
    this.my = 0;
    this.wheel = 0;
    
    this.mouseSens = 0.0022;
    this.padSensX = 3.4;
    this.padSensY = 2.6;
    
    this.usingGamepad = false;
    this.pointerLocked = false;
    this.anyInput = false;
    
    this.invertY = false;
    this.trackpad = false;
    
    this.onLockChange = null;
    this.onAnyInput = null;
    this.onDeviceChange = null;
    
    this.idleSeconds = 0;
    this.padIndex = -1;
    this.lookHoldTime = 0;
    
    this.wTapTimer = 0;
    
    this._bindEvents();
  }

  _bindEvents() {
    this.keyMap = {
      'KeyW': 'forward', 'KeyS': 'back', 'KeyA': 'left', 'KeyD': 'right',
      'ArrowUp': 'forward', 'ArrowDown': 'back', 'ArrowLeft': 'left', 'ArrowRight': 'right',
      'Space': 'jump', 'ShiftLeft': 'sprint', 'ShiftRight': 'sprint',
      'ControlLeft': 'crouch', 'KeyC': 'crouch',
      'KeyR': 'reload', 'KeyQ': 'grapple', 'KeyE': 'grapple',
      'KeyF': 'melee', 'KeyV': 'melee',
      'Digit1': 'slot1', 'Digit2': 'slot2', 'Digit3': 'slot3', 'Digit4': 'slot4', 'Digit5': 'slot5',
      'Escape': 'pause', 'KeyP': 'pause', 'Enter': 'confirm',
      'KeyG': 'grenade', 'KeyX': 'dash', 'AltLeft': 'dash',
      'KeyM': 'music', 'KeyT': 'talk', 'Tab': 'score'
    };

    this.mouseMap = {
      0: 'fire', 2: 'aim', 1: 'grapple', 3: 'grapple', 4: 'melee'
    };

    this.padMap = {
      0: 'jump', 1: 'crouch', 2: 'reload', 3: 'nextWeapon', 4: 'grapple', 5: 'melee',
      6: 'aim', 7: 'fire', 9: 'pause', 10: 'sprint', 11: 'grenade', 12: 'grenade',
      13: 'slot5', 14: 'prevWeapon', 15: 'nextWeapon', 8: 'score', 17: 'confirm'
    };

    window.addEventListener('keydown', (e) => {
      this._registerInput(false);
      const action = this.keyMap[e.code];
      if (action) {
        this.keys[action] = true;
      }
      if (e.code === 'KeyW' && !e.repeat) {
        const now = performance.now();
        if (now - this.wTapTimer < 300) {
          this.keys['doubleTapW'] = true;
        }
        this.wTapTimer = now;
      }
      if (['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      const action = this.keyMap[e.code];
      if (action) {
        this.keys[action] = false;
      }
      if (e.code === 'KeyW') {
        this.keys['doubleTapW'] = false;
      }
    });

    window.addEventListener('blur', () => this._clearAll());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this._clearAll();
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.pointerLocked) return;
      this._registerInput(false);
      let dx = e.movementX;
      let dy = e.movementY;
      
      if (Math.abs(dx) > 400) dx = 0;
      if (Math.abs(dy) > 400) dy = 0;
      
      this.mx += dx;
      this.my += dy;
    });

    document.addEventListener('mousedown', (e) => {
      this._registerInput(false);
      const action = this.mouseMap[e.button];
      if (action) {
        this.mouseBtns[action] = true;
      }
    });

    document.addEventListener('mouseup', (e) => {
      const action = this.mouseMap[e.button];
      if (action) {
        this.mouseBtns[action] = false;
      }
    });

    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('wheel', (e) => {
      this.wheel += Math.sign(e.deltaY);
    }, { passive: true });

    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
      if (this.onLockChange) this.onLockChange(this.pointerLocked);
    });

    window.addEventListener('gamepadconnected', (e) => {
      this.padIndex = e.gamepad.index;
      this._registerInput(true);
    });
  }

  _clearAll() {
    this.keys = {};
    this.mouseBtns = {};
    for (let k in this.state) this.state[k] = false;
  }

  _registerInput(isGamepad) {
    this.idleSeconds = 0;
    if (!this.anyInput) {
      this.anyInput = true;
      if (this.onAnyInput) this.onAnyInput();
    }
    if (this.usingGamepad !== isGamepad) {
      this.usingGamepad = isGamepad;
      if (this.onDeviceChange) this.onDeviceChange(isGamepad);
    }
  }

  async requestLock() {
    if (this.pointerLocked) return;
    try {
      if (this.canvas.requestPointerLock) {
        try {
          await this.canvas.requestPointerLock({ unadjustedMovement: true });
        } catch (e) {
          await this.canvas.requestPointerLock();
        }
      }
    } catch (e) {
      console.warn("Pointer lock failed", e);
    }
  }

  exitLock() {
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }

  _getPad() {
    if (this.padIndex < 0) return null;
    const pads = navigator.getGamepads();
    return pads[this.padIndex] || null;
  }

  _applyDeadzone(val) {
    const deadzone = 0.14;
    if (Math.abs(val) < deadzone) return 0;
    return (val - Math.sign(val) * deadzone) / 0.86;
  }

  _applyCurve(val) {
    return Math.sign(val) * Math.pow(Math.abs(val), 1.8);
  }

  update(dt) {
    this.idleSeconds += dt;
    
    for (const k in this.state) {
      this.prev[k] = this.state[k];
    }
    
    this.state = { ...this.keys, ...this.mouseBtns };

    if (this.wheel < 0) {
      this.state.prevWeapon = true;
    } else if (this.wheel > 0) {
      this.state.nextWeapon = true;
    }

    if (this.trackpad) {
      if (this.state.sprint) {
        this.state.aim = true;
        this.state.sprint = false;
      }
      if (this.state.doubleTapW) {
        this.state.sprint = true;
      }
    }

    let mx = 0, my = 0;
    if (this.state.forward) my -= 1;
    if (this.state.back) my += 1;
    if (this.state.left) mx -= 1;
    if (this.state.right) mx += 1;

    let len = Math.sqrt(mx * mx + my * my);
    if (len > 1) {
      mx /= len;
      my /= len;
    }

    this.move.x = mx;
    this.move.y = -my;

    this.look.x = this.mx * this.mouseSens;
    this.look.y = this.my * this.mouseSens * (this.invertY ? -1 : 1);
    
    const pad = this._getPad();
    if (pad) {
      const px = this._applyDeadzone(pad.axes[0]);
      const py = this._applyDeadzone(pad.axes[1]);
      
      const lx = this._applyDeadzone(pad.axes[2]);
      const ly = this._applyDeadzone(pad.axes[3]);

      if (px !== 0 || py !== 0 || lx !== 0 || ly !== 0) {
        this._registerInput(true);
      }

      if (px !== 0 || py !== 0) {
        let plen = Math.sqrt(px * px + py * py);
        if (plen > 1) {
          this.move.x = px / plen;
          this.move.y = -(py / plen);
        } else {
          this.move.x = px;
          this.move.y = -py;
        }
      }

      let llen = Math.sqrt(lx * lx + ly * ly);
      if (llen > 0) {
        this.lookHoldTime += dt;
        let accel = 1;
        if (this.lookHoldTime > 0.25) {
          accel = Math.min(1.9, 1 + (this.lookHoldTime - 0.25) * 2);
        }
        
        const cx = this._applyCurve(lx);
        const cy = this._applyCurve(ly);
        
        this.look.x += cx * this.padSensX * dt * accel;
        this.look.y += cy * this.padSensY * dt * accel * (this.invertY ? -1 : 1);
      } else {
        this.lookHoldTime = 0;
      }

      for (let i = 0; i < pad.buttons.length; i++) {
        if (pad.buttons[i].pressed) {
          this._registerInput(true);
          const action = this.padMap[i];
          if (action) {
            this.state[action] = true;
          }
        }
      }
    }

    this.mx = 0;
    this.my = 0;
    this.wheel = 0;
  }

  down(action) {
    return !!this.state[action];
  }

  pressed(action) {
    return !!this.state[action] && !this.prev[action];
  }

  released(action) {
    return !this.state[action] && !!this.prev[action];
  }

  consume(action) {
    this.state[action] = false;
  }

  anyPressed() {
    for (const k in this.state) {
      if (this.state[k] && !this.prev[k]) return true;
    }
    return false;
  }

  rumble(strong, weak, duration) {
    const pad = this._getPad();
    if (pad && pad.vibrationActuator) {
      try {
        pad.vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: duration,
          weakMagnitude: weak,
          strongMagnitude: strong
        });
      } catch (e) {
        // Ignored
      }
    }
  }
}
