import * as THREE from 'three';

class Audio {
    constructor() {
        this.ctx = null;
        this.master = null;
        this.compressor = null;
        this.noiseBuffer = null;
        
        this._vol = 0.55;
        this.listenerPos = new THREE.Vector3();
        this.listenerRight = new THREE.Vector3(1, 0, 0);
        
        // Music state
        this._musicPlaying = false;
        this.intensity = 0;
        this.tune = 0;
        this.musicInterval = null;
        this.musicStep = 0;
        this.reelOsc = null;
        this.reelGain = null;
    }
    
    get volume() { return this._vol; }
    set volume(v) {
        this._vol = v;
        if (this.master) this.master.gain.value = v;
    }
    
    init() {
        if (this.ctx) return;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.compressor = this.ctx.createDynamicsCompressor();
        this.compressor.threshold.value = -16;
        this.compressor.ratio.value = 5;
        
        this.master = this.ctx.createGain();
        this.master.gain.value = this._vol;
        
        this.master.connect(this.compressor);
        this.compressor.connect(this.ctx.destination);
        
        // create noise buffer
        const bufferSize = this.ctx.sampleRate * 2; // 2 seconds
        this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = this.noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
    }
    
    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }
    
    setListener(pos, right) {
        this.listenerPos.copy(pos);
        this.listenerRight.copy(right);
    }
    
    _out(pos, vol = 1) {
        const gain = this.ctx.createGain();
        if (!pos) {
            gain.gain.value = vol;
            gain.connect(this.master);
            return gain;
        }
        
        // 3D falloff
        const dist = this.listenerPos.distanceTo(pos);
        const falloff = 1 / (1 + dist * 0.09);
        
        // Stereo panning
        const dir = new THREE.Vector3().subVectors(pos, this.listenerPos).normalize();
        let pan = dir.dot(this.listenerRight);
        pan = Math.max(-1, Math.min(1, pan));
        
        const panner = this.ctx.createStereoPanner();
        panner.pan.value = pan;
        
        gain.gain.value = vol * falloff;
        gain.connect(panner);
        panner.connect(this.master);
        return gain;
    }
    
    noise({dur, gain = 1, type = 'lowpass', freq = 1000, freqEnd, q = 1, attack = 0.01, pos, delay = 0, hp = 0, at}) {
        if (!this.ctx) return;
        const t = at !== undefined ? at : this.ctx.currentTime + delay;
        
        const source = this.ctx.createBufferSource();
        source.buffer = this.noiseBuffer;
        source.loop = true;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = type;
        filter.frequency.setValueAtTime(freq, t);
        if (freqEnd !== undefined) {
            filter.frequency.exponentialRampToValueAtTime(Math.max(10, freqEnd), t + dur);
        }
        filter.Q.value = q;
        
        const env = this.ctx.createGain();
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(gain, t + attack);
        env.gain.exponentialRampToValueAtTime(0.001, t + dur);
        
        source.connect(filter);
        
        let lastNode = filter;
        
        if (hp > 0) {
            const hpFilter = this.ctx.createBiquadFilter();
            hpFilter.type = 'highpass';
            hpFilter.frequency.value = hp;
            lastNode.connect(hpFilter);
            lastNode = hpFilter;
        }
        
        lastNode.connect(env);
        env.connect(this._out(pos));
        
        source.start(t);
        source.stop(t + dur);
        return source;
    }
    
    tone({freq, freqEnd, dur, gain = 1, type = 'sine', attack = 0.01, pos, delay = 0, at, out}) {
        if (!this.ctx) return;
        const t = at !== undefined ? at : this.ctx.currentTime + delay;
        
        const osc = this.ctx.createOscillator();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, t);
        if (freqEnd !== undefined) {
            osc.frequency.exponentialRampToValueAtTime(Math.max(1, freqEnd), t + dur);
        }
        
        const env = this.ctx.createGain();
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(gain, t + attack);
        env.gain.exponentialRampToValueAtTime(0.001, t + dur);
        
        osc.connect(env);
        if (out) {
            env.connect(out);
        } else {
            env.connect(this._out(pos));
        }
        
        osc.start(t);
        osc.stop(t + dur);
        return { osc, env };
    }
    
    // WEAPONS
    shot() {
        this.noise({ dur: 0.2, gain: 0.6, type: 'bandpass', freq: 1200, freqEnd: 250 });
        this.noise({ dur: 0.1, gain: 0.3, type: 'highpass', freq: 2800 });
        this.tone({ type: 'triangle', freq: 160, freqEnd: 40, dur: 0.25, gain: 0.8 });
    }
    
    shotgunFire() {
        this.noise({ dur: 0.35, gain: 0.8, type: 'lowpass', freq: 1800, freqEnd: 120 });
        this.noise({ dur: 0.15, gain: 0.4, type: 'highpass', freq: 2500 });
        this.tone({ type: 'triangle', freq: 110, freqEnd: 30, dur: 0.3, gain: 0.9 });
    }
    
    sniperFire() {
        this.noise({ dur: 0.4, gain: 0.7, type: 'bandpass', freq: 1400, freqEnd: 90 });
        this.noise({ dur: 0.15, gain: 0.4, type: 'highpass', freq: 3500 });
        this.tone({ type: 'sawtooth', freq: 260, freqEnd: 30, dur: 0.3, gain: 0.6 });
        this.tone({ type: 'sine', freq: 1800, freqEnd: 400, dur: 0.15, gain: 0.3 });
    }
    
    revolver() {
        this.noise({ dur: 0.25, gain: 0.6, type: 'bandpass', freq: 900, freqEnd: 180 });
        this.noise({ dur: 0.1, gain: 0.3, type: 'highpass', freq: 3000 });
        this.tone({ type: 'sawtooth', freq: 200, freqEnd: 35, dur: 0.2, gain: 0.7 });
        this.tone({ type: 'sine', freq: 2600, freqEnd: 900, dur: 0.1, gain: 0.2 });
    }
    
    katanaSwing() {
        this.noise({ dur: 0.15, gain: 0.5, type: 'bandpass', freq: 500, freqEnd: 3000 });
    }
    
    katanaHit() {
        this.noise({ dur: 0.2, gain: 0.6, type: 'lowpass', freq: 900, freqEnd: 200 });
        this.noise({ dur: 0.1, gain: 0.3, type: 'bandpass', freq: 2500 });
        this.tone({ type: 'triangle', freq: 180, freqEnd: 70, dur: 0.2, gain: 0.7 });
    }
    
    empty() {
        this.noise({ dur: 0.03, gain: 0.4, type: 'highpass', freq: 3000 });
    }
    
    reload() {
        if(!this.ctx) return;
        const t = this.ctx.currentTime;
        this.noise({ at: t, dur: 0.05, gain: 0.3, type: 'highpass', freq: 2000 });
        this.noise({ at: t + 0.25, dur: 0.05, gain: 0.3, type: 'highpass', freq: 2000 });
        this.noise({ at: t + 0.9, dur: 0.05, gain: 0.4, type: 'highpass', freq: 1800 });
        this.tone({ at: t + 1.25, type: 'triangle', freq: 400, freqEnd: 600, dur: 0.1, gain: 0.3 });
    }

    // COMBAT
    hitEnemy(pos) {
        this.noise({ dur: 0.15, gain: 0.5, type: 'lowpass', freq: 900, pos });
        this.tone({ type: 'square', freq: 200, freqEnd: 120, dur: 0.15, gain: 0.4, pos });
    }
    
    headshot(pos) {
        this.noise({ dur: 0.2, gain: 0.5, type: 'highpass', freq: 3000, pos });
        this.tone({ type: 'triangle', freq: 1500, freqEnd: 500, dur: 0.2, gain: 0.6, pos });
    }
    
    kill(isBoss) {
        this.tone({ type: 'square', freq: 880, dur: 0.2, gain: 0.4 });
        this.tone({ type: 'square', freq: 1320, dur: 0.3, gain: 0.4, delay: 0.1 });
        this.tone({ type: 'sine', freq: 140, freqEnd: 50, dur: 0.4, gain: 0.5 });
    }
    
    enemyDie(pos) {
        this.tone({ type: 'sawtooth', freq: 160, freqEnd: 40, dur: 0.3, gain: 0.4, pos });
        this.noise({ dur: 0.3, gain: 0.5, type: 'lowpass', freq: 600, freqEnd: 100, pos });
        this.noise({ dur: 0.1, gain: 0.3, type: 'bandpass', freq: 1400, pos });
    }
    
    gib(pos) {
        this.noise({ dur: 0.25, gain: 0.6, type: 'lowpass', freq: 500, freqEnd: 120, pos });
        this.noise({ dur: 0.15, gain: 0.4, type: 'bandpass', freq: 2000, pos });
    }
    
    hurt() {
        this.tone({ type: 'sawtooth', freq: 200, freqEnd: 90, dur: 0.25, gain: 0.6 });
        this.noise({ dur: 0.2, gain: 0.5, type: 'lowpass', freq: 500 });
    }
    
    death() {
        this.tone({ type: 'sawtooth', freq: 220, freqEnd: 30, dur: 1.2, gain: 0.7 });
        this.noise({ dur: 0.8, gain: 0.6, type: 'lowpass', freq: 800, freqEnd: 80 });
    }

    // MOVEMENT
    footstep(vol) {
        this.noise({ dur: 0.05, gain: 0.12 * vol, type: 'lowpass', freq: 600 });
    }
    
    jump() {
        this.tone({ type: 'triangle', freq: 260, freqEnd: 480, dur: 0.15, gain: 0.3 });
        this.noise({ dur: 0.1, gain: 0.2, type: 'lowpass', freq: 600 });
    }
    
    land(impact) {
        this.noise({ dur: 0.1, gain: 0.15 * impact, type: 'lowpass', freq: 350 });
    }
    
    slide() {
        this.noise({ dur: 0.45, gain: 0.25, type: 'lowpass', freq: 1200, freqEnd: 300 });
    }
    
    wallJump() {
        this.noise({ dur: 0.15, gain: 0.25, type: 'lowpass', freq: 700 });
        this.tone({ type: 'triangle', freq: 300, freqEnd: 600, dur: 0.15, gain: 0.3 });
    }
    
    mantle() {
        this.noise({ dur: 0.2, gain: 0.3, type: 'lowpass', freq: 900, freqEnd: 300 });
    }
    
    dash() {
        this.noise({ dur: 0.2, gain: 0.4, type: 'bandpass', freq: 800, freqEnd: 2500 });
    }

    // GRAPPLE
    grappleFire() {
        this.noise({ dur: 0.15, gain: 0.3, type: 'highpass', freq: 1500 });
        this.tone({ type: 'sawtooth', freq: 500, freqEnd: 1500, dur: 0.15, gain: 0.4 });
    }
    
    grappleHit() {
        this.noise({ dur: 0.1, gain: 0.4, type: 'highpass', freq: 2000 });
        this.tone({ type: 'square', freq: 300, freqEnd: 200, dur: 0.1, gain: 0.3 });
    }
    
    grappleRelease() {
        this.tone({ type: 'sawtooth', freq: 900, freqEnd: 300, dur: 0.15, gain: 0.3 });
    }
    
    reelLoop(active) {
        if (!this.ctx) return;
        if (active && !this.reelGain) {
            this.reelGain = this.ctx.createGain();
            this.reelGain.gain.setValueAtTime(0, this.ctx.currentTime);
            this.reelGain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.1);
            this.reelGain.connect(this.master);
            
            this.reelOsc = this.ctx.createBufferSource();
            this.reelOsc.buffer = this.noiseBuffer;
            this.reelOsc.loop = true;
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 600;
            this.reelOsc.connect(filter);
            filter.connect(this.reelGain);
            this.reelOsc.start();
        } else if (!active && this.reelGain) {
            this.reelGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);
            setTimeout(() => {
                if (this.reelOsc) this.reelOsc.stop();
                this.reelOsc = null;
                this.reelGain = null;
            }, 100);
        }
    }

    // ENEMIES
    enemyShot(pos) {
        this.noise({ dur: 0.2, gain: 0.5, type: 'bandpass', freq: 1200, freqEnd: 200, pos });
        this.tone({ type: 'square', freq: 220, freqEnd: 60, dur: 0.15, gain: 0.4, pos });
    }
    
    remoteShot(type, pos) {
        if (type === 'shotgun') {
            this.shotgun(pos);
        } else if (type === 'sniper') {
            this.sniperShot(pos);
        } else {
            this.enemyShot(pos);
        }
    }
    
    spawn(pos) {
        if (!this.ctx) return;
        const t = this.ctx.currentTime;
        for(let i=0; i<5; i++) {
            this.noise({ at: t + i*0.05, dur: 0.04, gain: 0.3, type: 'highpass', freq: 2500, pos });
        }
    }
    
    lunge(pos) {
        this.tone({ type: 'sawtooth', freq: 200, freqEnd: 700, dur: 0.3, gain: 0.5, pos });
    }
    
    shieldHit(pos) {
        this.tone({ type: 'square', freq: 700, freqEnd: 300, dur: 0.15, gain: 0.5, pos });
        this.noise({ dur: 0.1, gain: 0.4, type: 'highpass', freq: 3000, pos });
    }

    // EFFECTS
    explosion(pos) {
        this.noise({ dur: 0.7, gain: 0.8, type: 'lowpass', freq: 900, freqEnd: 60, pos });
        this.tone({ type: 'triangle', freq: 80, freqEnd: 25, dur: 0.7, gain: 0.7, pos });
        this.noise({ dur: 0.2, gain: 0.5, type: 'bandpass', freq: 3000, pos });
    }
    
    fuse(pos) {
        this.noise({ dur: 0.1, gain: 0.2, type: 'highpass', freq: 5000, pos });
    }
    
    bulletImpact(pos) {
        this.noise({ dur: 0.05, gain: 0.3, type: 'highpass', freq: 1500, pos });
    }
    
    ricochet(pos) {
        this.tone({ type: 'sine', freq: 2500, freqEnd: 800, dur: 0.15, gain: 0.4, pos });
    }
    
    pickup() {
        this.tone({ type: 'triangle', freq: 700, freqEnd: 1100, dur: 0.1, gain: 0.4 });
        this.tone({ type: 'triangle', freq: 1100, freqEnd: 1500, dur: 0.15, gain: 0.4, delay: 0.1 });
    }
    
    wave() {
        const freqs = [440, 554, 659, 880];
        freqs.forEach((f, i) => {
            this.tone({ type: 'triangle', freq: f, dur: 0.15, gain: 0.3, delay: i * 0.1 });
        });
    }
    
    waveClear() {
        const freqs = [659, 880, 1108, 1318];
        freqs.forEach((f, i) => {
            this.tone({ type: 'triangle', freq: f, dur: 0.2, gain: 0.4, delay: i * 0.15 });
        });
    }
    
    switchWeapon() {
        this.noise({ dur: 0.1, gain: 0.3, type: 'bandpass', freq: 1800 });
    }
    
    heartbeat() {
        this.tone({ type: 'sine', freq: 55, dur: 0.15, gain: 0.5 });
        this.tone({ type: 'sine', freq: 50, dur: 0.2, gain: 0.4, delay: 0.2 });
    }
    
    tick() {
        this.noise({ dur: 0.02, gain: 0.2, type: 'highpass', freq: 4000 });
    }
    
    hitstop() {
        this.tone({ type: 'sine', freq: 60, dur: 0.1, gain: 0.5 });
    }
    
    stomp(pos) {
        this.noise({ dur: 0.3, gain: 0.6, type: 'lowpass', freq: 400, freqEnd: 60, pos });
        this.tone({ type: 'sine', freq: 60, freqEnd: 25, dur: 0.3, gain: 0.7, pos });
    }
    
    bossRoar(pos) {
        this.tone({ type: 'sawtooth', freq: 90, freqEnd: 60, dur: 0.8, gain: 0.6, pos });
        this.noise({ dur: 0.8, gain: 0.5, type: 'bandpass', freq: 500, pos });
    }
    
    smash(pos, big) {
        this.noise({ dur: big ? 0.5 : 0.3, gain: big ? 0.7 : 0.5, type: 'lowpass', freq: 600, freqEnd: 100, pos });
        this.noise({ dur: 0.1, gain: 0.4, type: 'highpass', freq: 2000, pos });
        this.tone({ type: 'triangle', freq: 120, freqEnd: 40, dur: big ? 0.5 : 0.3, gain: 0.6, pos });
    }
    
    parry() {
        const freqs = [2200, 3300, 4700];
        freqs.forEach(f => {
            this.tone({ type: 'sine', freq: f, dur: 0.1, gain: 0.3 });
        });
        this.noise({ dur: 0.05, gain: 0.4, type: 'highpass', freq: 3000 });
    }
    
    perfectParry() {
        this.parry();
        this.tone({ type: 'triangle', freq: 880, freqEnd: 1760, dur: 0.2, gain: 0.5 });
    }
    
    focusIn() {
        this.tone({ type: 'sine', freq: 1200, freqEnd: 420, dur: 0.4, gain: 0.5 });
        this.noise({ dur: 0.4, gain: 0.3, type: 'bandpass', freq: 800 });
    }
    
    focusSlash() {
        this.noise({ dur: 0.2, gain: 0.5, type: 'bandpass', freq: 600, freqEnd: 4000 });
        this.tone({ type: 'triangle', freq: 180, freqEnd: 60, dur: 0.2, gain: 0.6 });
        this.tone({ type: 'sine', freq: 1200, dur: 0.1, gain: 0.2 });
        this.tone({ type: 'sine', freq: 2400, dur: 0.1, gain: 0.1 });
    }
    
    pump() {
        this.noise({ dur: 0.1, gain: 0.4, type: 'bandpass', freq: 1500 });
        this.noise({ dur: 0.1, gain: 0.3, type: 'bandpass', freq: 900, delay: 0.15 });
    }
    
    shell() {
        this.noise({ dur: 0.05, gain: 0.2, type: 'highpass', freq: 2500 });
        this.tone({ type: 'square', freq: 1400, freqEnd: 900, dur: 0.1, gain: 0.15, delay: 0.05 });
    }
    
    cylinder() {
        this.noise({ dur: 0.05, gain: 0.3, type: 'highpass', freq: 2000 });
        this.tone({ type: 'square', freq: 700, freqEnd: 400, dur: 0.05, gain: 0.2, delay: 0.1 });
        this.noise({ dur: 0.05, gain: 0.2, type: 'highpass', freq: 2500, delay: 0.2 });
    }
    
    airdrop() {
        this.tone({ type: 'triangle', freq: 660, dur: 0.2, gain: 0.4 });
        this.tone({ type: 'triangle', freq: 880, dur: 0.3, gain: 0.4, delay: 0.1 });
    }
    
    crateLand(pos) {
        this.noise({ dur: 0.4, gain: 0.6, type: 'lowpass', freq: 500, freqEnd: 80, pos });
    }
    
    flyerDive(pos) {
        this.tone({ type: 'sawtooth', freq: 900, freqEnd: 300, dur: 0.4, gain: 0.4, pos });
        this.noise({ dur: 0.4, gain: 0.3, type: 'bandpass', freq: 1200, pos });
    }
    
    flyerBuzz(pos) {
        this.tone({ type: 'sawtooth', freq: 420, dur: 0.1, gain: 0.05, pos });
    }
    
    shotgun(pos) {
        this.noise({ dur: 0.3, gain: 0.6, type: 'lowpass', freq: 1500, freqEnd: 150, pos });
        this.tone({ type: 'triangle', freq: 90, freqEnd: 30, dur: 0.25, gain: 0.7, pos });
    }
    
    sniperShot(pos) {
        this.noise({ dur: 0.35, gain: 0.6, type: 'bandpass', freq: 700, freqEnd: 120, pos });
        this.tone({ type: 'sawtooth', freq: 400, freqEnd: 50, dur: 0.3, gain: 0.5, pos });
    }
    
    sniperAim(pos) {
        this.tone({ type: 'sine', freq: 1800, dur: 0.12, gain: 0.2, pos });
    }
    
    winded() {
        this.tone({ type: 'triangle', freq: 220, freqEnd: 140, dur: 0.3, gain: 0.4 });
    }

    // MUSIC
    get musicPlaying() { return this._musicPlaying; }
    
    musicOn(on) {
        if (on === this._musicPlaying) return;
        this._musicPlaying = on;
        
        if (on) {
            if (!this.ctx) this.init();
            this.musicStep = 0;
            this.musicInterval = setInterval(() => this.playMusicStep(), 150);
        } else {
            clearInterval(this.musicInterval);
        }
    }
    
    setIntensity(val) {
        this.intensity = Math.max(0, Math.min(1, val));
    }
    
    setTune(key) {
        this.tune = key;
    }
    
    playMusicStep() {
        if (!this.ctx || this.intensity < 0.1) return;
        
        const step = this.musicStep % 16;
        const scale = [220, 246, 261, 293, 329, 349, 392, 440];
        
        // Bass
        if (step % 4 === 0) {
            const f = scale[(this.tune + step) % scale.length] / 2;
            this.tone({ type: 'triangle', freq: f, dur: 0.2, gain: 0.2 * this.intensity });
        }
        
        // Rhythm
        if (step % 2 === 0) {
            this.noise({ dur: 0.05, gain: 0.05 * this.intensity, type: 'highpass', freq: 4000 });
        }
        if (step % 4 === 2) {
            this.noise({ dur: 0.1, gain: 0.1 * this.intensity, type: 'lowpass', freq: 800, freqEnd: 200 });
        }
        
        // Melody
        if (this.intensity > 0.5 && Math.random() < 0.5) {
            const f = scale[Math.floor(Math.random() * scale.length)];
            this.tone({ type: 'square', freq: f, dur: 0.1, gain: 0.1 * this.intensity });
            this.tone({ type: 'square', freq: f * 1.01, dur: 0.1, gain: 0.1 * this.intensity });
        }
        
        this.musicStep++;
    }

    setVolume(v) {
        this.volume = v;
    }

    play(name, ...args) {
        if (!name) return;
        if (name === 'step' || name === 'footstep') return this.footstep(...args);
        if (name === 'waveStart' || name === 'wave') return this.wave(...args);
        if (name === 'waveClear') return this.waveClear(...args);
        if (typeof this[name] === 'function') return this[name](...args);
    }
}

export const D = new Audio();
