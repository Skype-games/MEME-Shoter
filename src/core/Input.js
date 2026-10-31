// Entrada unificada: teclado + ratón (pointer lock) + táctil (joystick, look, botones)

export class Input {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.onPause = opts.onPause || (() => {});
    this.onFirstLock = opts.onFirstLock || (() => {});
    this.touch = matchMedia('(pointer: coarse)').matches || (navigator.maxTouchPoints > 0 && innerWidth < 1024);
    this.keys = new Set();
    this.lookX = 0; this.lookY = 0;
    this.firing = false;
    this.aiming = false;
    this.locked = false;
    this.enabled = false;
    this.pressed = { jump: false, reload: false, swap: false, special: false, interact: false, pause: false };
    this.moveX = 0; this.moveY = 0;
    this.lookPointer = null;
    this.stickPointer = null;
    this.handlers = [];
    this.bindKeyboard();
    this.bindMouse();
    this.bindTouch();
    this.applyTouchVisibility();
  }

  on(target, type, fn, opts) {
    target.addEventListener(type, fn, opts);
    this.handlers.push({ target, type, fn, opts });
  }

  applyTouchVisibility() {
    const ui = document.getElementById('touch-ui');
    if (ui) ui.classList.toggle('hidden', !this.touch);
    document.body.classList.toggle('is-touch', this.touch);
  }

  setEnabled(on) {
    this.enabled = on;
    if (!on) {
      this.firing = false;
      this.aiming = false;
      this.moveX = this.moveY = 0;
      this.keys.clear();
      this.pressed = { jump: false, reload: false, swap: false, special: false, interact: false, pause: false };
      this.releaseStick();
    }
  }

  requestLock() {
    if (this.touch) return;
    if (document.pointerLockElement !== this.canvas) {
      try { this.canvas.requestPointerLock?.(); } catch { /* gesto requerido */ }
    }
  }

  bindKeyboard() {
    this.on(window, 'keydown', (e) => {
      if (!this.enabled) return;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      switch (e.code) {
        case 'Space': this.pressed.jump = true; break;
        case 'KeyR': this.pressed.reload = true; break;
        case 'KeyE': this.pressed.interact = true; break;
        case 'KeyQ': this.pressed.special = true; break;
        case 'Digit1': this.swapTo = 0; break;
        case 'Digit2': this.swapTo = 1; break;
        case 'Digit3': this.swapTo = 2; break;
        case 'KeyX': this.pressed.swap = true; break;
        case 'Escape': this.pressed.pause = true; break;
        case 'KeyP': this.pressed.pause = true; break;
        case 'KeyM': this.aiming = !this.aiming; break;
        case 'KeyH': this.pressed.interact = true; break;
      }
    });
    this.on(window, 'keyup', (e) => this.keys.delete(e.code));
    this.on(window, 'blur', () => { this.keys.clear(); this.firing = false; });
    this.on(window, 'wheel', (e) => {
      if (!this.enabled) return;
      this.pressed.swap = true;
      this.swapDir = e.deltaY > 0 ? 1 : -1;
    }, { passive: true });
  }

  bindMouse() {
    this.on(this.canvas, 'mousedown', (e) => {
      if (!this.enabled || this.touch) return;
      if (!this.locked) { this.requestLock(); return; }
      if (e.button === 0) this.firing = true;
      if (e.button === 2) this.aiming = true;
    });
    this.on(window, 'mouseup', (e) => {
      if (e.button === 0) this.firing = false;
      if (e.button === 2) this.aiming = false;
    });
    this.on(this.canvas, 'contextmenu', (e) => e.preventDefault());
    this.on(window, 'mousemove', (e) => {
      if (!this.enabled || this.touch || !this.locked) return;
      this.lookX += e.movementX || 0;
      this.lookY += e.movementY || 0;
    });
    this.on(document, 'pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (this.locked) {
        this.onFirstLock();
      } else if (this.enabled && !this.touch) {
        this.onPause();
      }
    });
  }

  bindTouch() {
    const joy = document.getElementById('joystick');
    const stick = document.getElementById('stick');
    const look = document.getElementById('look-zone');
    if (!joy || !stick || !look) return;

    const moveStick = (e) => {
      const r = joy.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      let dx = e.clientX - cx, dy = e.clientY - cy;
      const d = Math.hypot(dx, dy) || 1;
      const max = r.width * 0.38;
      if (d > max) { dx = (dx / d) * max; dy = (dy / d) * max; }
      stick.style.transform = `translate(${dx}px, ${dy}px)`;
      this.moveX = dx / max;
      this.moveY = dy / max;
    };
    this.on(joy, 'pointerdown', (e) => {
      if (!this.enabled) return;
      e.preventDefault();
      this.stickPointer = e.pointerId;
      joy.setPointerCapture?.(e.pointerId);
      moveStick(e);
    });
    this.on(joy, 'pointermove', (e) => {
      if (e.pointerId !== this.stickPointer) return;
      e.preventDefault();
      moveStick(e);
    });
    const endStick = (e) => {
      if (e.pointerId !== this.stickPointer) return;
      this.releaseStick();
    };
    this.on(joy, 'pointerup', endStick);
    this.on(joy, 'pointercancel', endStick);

    this.on(look, 'pointerdown', (e) => {
      if (!this.enabled) return;
      e.preventDefault();
      this.lookPointer = e.pointerId;
      look.setPointerCapture?.(e.pointerId);
      this.lastLook = { x: e.clientX, y: e.clientY };
    });
    this.on(look, 'pointermove', (e) => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      const dx = e.clientX - this.lastLook.x;
      const dy = e.clientY - this.lastLook.y;
      this.lastLook = { x: e.clientX, y: e.clientY };
      this.lookX += dx * 0.42;
      this.lookY += dy * 0.42;
    });
    const endLook = (e) => {
      if (e.pointerId === this.lookPointer) this.lookPointer = null;
    };
    this.on(look, 'pointerup', endLook);
    this.on(look, 'pointercancel', endLook);

    const hold = (id, on, off) => {
      const el = document.getElementById(id);
      if (!el) return;
      this.on(el, 'pointerdown', (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        e.stopPropagation();
        on(e);
      });
      const up = (e) => { e.preventDefault(); off?.(e); };
      this.on(el, 'pointerup', up);
      this.on(el, 'pointercancel', up);
      this.on(el, 'pointerleave', up);
    };
    hold('btn-fire', () => { this.firing = true; }, () => { this.firing = false; });
    hold('btn-jump', () => { this.pressed.jump = true; });
    hold('btn-reload', () => { this.pressed.reload = true; });
    hold('btn-swap', () => { this.pressed.swap = true; this.swapDir = 1; });
    hold('btn-special', () => { this.pressed.special = true; });
    hold('btn-pickup', () => { this.pressed.interact = true; });
    hold('btn-aim', () => { this.aiming = !this.aiming; });

    this.on(document, 'gesturestart', (e) => e.preventDefault());
    this.on(document, 'dblclick', (e) => e.preventDefault(), { passive: false });
  }

  releaseStick() {
    this.stickPointer = null;
    this.moveX = 0; this.moveY = 0;
    const stick = document.getElementById('stick');
    if (stick) stick.style.transform = 'translate(0px, 0px)';
  }

  sample() {
    let mx = 0, my = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) my -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) my += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) mx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) mx += 1;
    if (this.touch) { mx += this.moveX; my += this.moveY; }
    const len = Math.hypot(mx, my);
    if (len > 1) { mx /= len; my /= len; }

    const s = {
      moveX: mx, moveY: my,
      lookX: this.lookX, lookY: this.lookY,
      firing: this.firing,
      aiming: this.aiming,
      sprint: this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'),
      jump: this.pressed.jump,
      reload: this.pressed.reload,
      swap: this.pressed.swap,
      swapDir: this.swapDir || 1,
      special: this.pressed.special,
      interact: this.pressed.interact,
      pause: this.pressed.pause,
      swapTo: this.swapTo,
    };
    this.lookX = 0; this.lookY = 0;
    this.pressed = { jump: false, reload: false, swap: false, special: false, interact: false, pause: false };
    this.swapTo = undefined; this.swapDir = undefined;
    return s;
  }

  dispose() {
    for (const h of this.handlers) h.target.removeEventListener(h.type, h.fn, h.opts);
    this.handlers = [];
  }
}
