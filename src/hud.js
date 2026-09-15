export class HUD {
    constructor(hudEl) {
        this.el = hudEl;
        this.el.innerHTML = '';
        
        // Top Left
        this.tl = document.createElement('div');
        this.tl.className = 'hud-tl';
        this.waveTxt = document.createElement('div');
        this.waveTxt.className = 'wave-txt';
        this.tl.appendChild(this.waveTxt);
        this.tally = document.createElement('div');
        this.tally.className = 'tally';
        this.tl.appendChild(this.tally);
        this.el.appendChild(this.tl);

        // Top Right
        this.tr = document.createElement('div');
        this.tr.className = 'hud-tr';
        this.scoreTxt = document.createElement('div');
        this.scoreTxt.className = 'score';
        this.tr.appendChild(this.scoreTxt);
        this.comboTxt = document.createElement('div');
        this.comboTxt.className = 'combo';
        this.tr.appendChild(this.comboTxt);
        this.el.appendChild(this.tr);

        // Bottom Left
        this.bl = document.createElement('div');
        this.bl.className = 'hud-bl';
        this.healthContainer = document.createElement('div');
        this.healthContainer.className = 'health';
        const hpLabel = document.createElement('div');
        hpLabel.className = 'label';
        hpLabel.textContent = 'HP';
        this.healthContainer.appendChild(hpLabel);
        const hpBar = document.createElement('div');
        hpBar.className = 'bar';
        this.hpFill = document.createElement('div');
        this.hpFill.className = 'fill';
        hpBar.appendChild(this.hpFill);
        this.healthContainer.appendChild(hpBar);
        this.bl.appendChild(this.healthContainer);
        this.el.appendChild(this.bl);

        // Bottom Right
        this.br = document.createElement('div');
        this.br.className = 'hud-br';
        this.slots = document.createElement('div');
        this.slots.className = 'slots';
        this.br.appendChild(this.slots);
        this.ammoContainer = document.createElement('div');
        this.ammoContainer.className = 'ammo';
        this.ammoCurrent = document.createElement('span');
        this.ammoCurrent.className = 'current';
        this.ammoReserve = document.createElement('span');
        this.ammoReserve.className = 'reserve';
        this.ammoContainer.appendChild(this.ammoCurrent);
        this.ammoContainer.appendChild(this.ammoReserve);
        this.br.appendChild(this.ammoContainer);
        this.nades = document.createElement('div');
        this.nades.className = 'nades';
        this.br.appendChild(this.nades);
        this.el.appendChild(this.br);

        // Center elements
        this.center = document.createElement('div');
        this.center.className = 'hud-center';
        
        this.crosshair = document.createElement('div');
        this.crosshair.className = 'crosshair';
        const chClasses = ['ch-t', 'ch-b', 'ch-l', 'ch-r'];
        for (let cls of chClasses) {
            const line = document.createElement('i');
            line.className = cls;
            this.crosshair.appendChild(line);
        }
        const dot = document.createElement('i');
        dot.className = 'ch-dot';
        this.crosshair.appendChild(dot);
        this.center.appendChild(this.crosshair);

        this.grappleRet = document.createElement('div');
        this.grappleRet.className = 'grapple-ret';
        this.center.appendChild(this.grappleRet);

        this.hitmarkerEl = document.createElement('div');
        this.hitmarkerEl.className = 'hitmarker';
        const hm1 = document.createElement('i');
        const hm2 = document.createElement('i');
        this.hitmarkerEl.appendChild(hm1);
        this.hitmarkerEl.appendChild(hm2);
        this.center.appendChild(this.hitmarkerEl);

        this.scope = document.createElement('div');
        this.scope.className = 'scope';
        const scopeRing = document.createElement('div');
        scopeRing.className = 'ring';
        const scopeH = document.createElement('div');
        scopeH.className = 'h-line';
        const scopeV = document.createElement('div');
        scopeV.className = 'v-line';
        const scopeDot = document.createElement('div');
        scopeDot.className = 's-dot';
        this.scope.appendChild(scopeRing);
        this.scope.appendChild(scopeH);
        this.scope.appendChild(scopeV);
        this.scope.appendChild(scopeDot);
        this.center.appendChild(this.scope);

        this.gstam = document.createElement('div');
        this.gstam.className = 'gstam';
        this.gstamFill = document.createElement('div');
        this.gstamFill.className = 'fill';
        this.gstam.appendChild(this.gstamFill);
        this.center.appendChild(this.gstam);

        this.el.appendChild(this.center);

        this.focusMark = document.createElement('div');
        this.focusMark.className = 'focus-mark';
        for (let i = 0; i < 4; i++) {
            const bracket = document.createElement('div');
            bracket.className = 'bracket';
            this.focusMark.appendChild(bracket);
        }
        this.el.appendChild(this.focusMark);

        // Left Side
        this.focusMeterContainer = document.createElement('div');
        this.focusMeterContainer.className = 'focus-meter';
        this.focusMeterFill = document.createElement('div');
        this.focusMeterFill.className = 'fill';
        this.focusMeterContainer.appendChild(this.focusMeterFill);
        this.el.appendChild(this.focusMeterContainer);

        // Overlays
        this.dmgIndContainer = document.createElement('div');
        this.dmgIndContainer.className = 'dmg-ind-container';
        this.el.appendChild(this.dmgIndContainer);

        this.messageEl = document.createElement('div');
        this.messageEl.className = 'message';
        this.msgMain = document.createElement('div');
        this.msgMain.className = 'msg-main';
        this.msgSub = document.createElement('div');
        this.msgSub.className = 'msg-sub';
        this.messageEl.appendChild(this.msgMain);
        this.messageEl.appendChild(this.msgSub);
        this.el.appendChild(this.messageEl);

        this.killfeed = document.createElement('div');
        this.killfeed.className = 'killfeed';
        this.el.appendChild(this.killfeed);

        this.bossbarContainer = document.createElement('div');
        this.bossbarContainer.className = 'bossbar';
        this.bossName = document.createElement('div');
        this.bossName.className = 'name';
        const bbBar = document.createElement('div');
        bbBar.className = 'bar';
        this.bossFill = document.createElement('div');
        this.bossFill.className = 'fill';
        bbBar.appendChild(this.bossFill);
        this.bossbarContainer.appendChild(this.bossName);
        this.bossbarContainer.appendChild(bbBar);
        this.el.appendChild(this.bossbarContainer);

        // Screens
        this.buildMenu();
        this.buildGameOver();

        this.msgTimeout = null;
    }

    buildMenu() {
        this.menuScreen = document.createElement('div');
        this.menuScreen.className = 'screen';
        this.menuScreen.id = 'menu';

        const panel = document.createElement('div');
        panel.className = 'panel';
        
        const title = document.createElement('h1');
        title.innerHTML = 'DOODLE BATTLE<br><i>a sketchy shooter</i>';
        panel.appendChild(title);

        const cols = document.createElement('div');
        cols.className = 'cols';

        const col1 = document.createElement('div');
        col1.className = 'col';
        col1.innerHTML = `
            <h3>CONTROLS</h3>
            <p>WASD — move</p>
            <p>Mouse — look</p>
            <p>Click — shoot</p>
            <p>Right Click — aim</p>
            <p>R — reload</p>
            <p>Shift — sprint</p>
            <p>Space — jump</p>
            <p>C — crouch</p>
            <p>Scroll — switch weapon</p>
        `;
        cols.appendChild(col1);

        const col2 = document.createElement('div');
        col2.className = 'col';
        col2.innerHTML = `
            <h3>MORE</h3>
            <p>Q/E — grapple</p>
            <p>F — melee/katana</p>
            <p>G — grenade</p>
            <p>X — dash</p>
            <p>1-4 — weapon slots</p>
            <div class="settings">
                <label>Sens: <input type="range" id="sens-slider" min="0.1" max="5" step="0.1" value="1"></label>
                <label>Vol: <input type="range" id="vol-slider" min="0" max="1" step="0.05" value="0.5"></label>
                <label><input type="checkbox" id="inv-y"> Invert Y</label>
            </div>
        `;
        cols.appendChild(col2);
        panel.appendChild(cols);

        const mainBtns = document.createElement('div');
        mainBtns.className = 'mainbtns';

        this.playBtn = document.createElement('button');
        this.playBtn.className = 'start';
        this.playBtn.innerHTML = 'PLAY<br><i>click to draw</i>';
        this.playBtn.addEventListener('click', () => {
            if (this.onStart) this.onStart();
        });
        mainBtns.appendChild(this.playBtn);
        panel.appendChild(mainBtns);

        this.menuScreen.appendChild(panel);
        this.el.appendChild(this.menuScreen);
    }

    buildGameOver() {
        this.goScreen = document.createElement('div');
        this.goScreen.className = 'screen';
        this.goScreen.id = 'gameover';

        const panel = document.createElement('div');
        panel.className = 'panel';

        const title = document.createElement('h1');
        title.textContent = 'ERASED';
        panel.appendChild(title);

        this.goStats = document.createElement('p');
        this.goStats.className = 'stats';
        panel.appendChild(this.goStats);

        const mainBtns = document.createElement('div');
        mainBtns.className = 'mainbtns';

        this.menuBtn = document.createElement('button');
        this.menuBtn.className = 'start';
        this.menuBtn.innerHTML = 'MAIN MENU<br><i>click to draw again</i>';
        this.menuBtn.addEventListener('click', () => {
            if (this.onStart) this.onStart();
        });
        mainBtns.appendChild(this.menuBtn);
        panel.appendChild(mainBtns);

        this.goScreen.appendChild(panel);
        this.el.appendChild(this.goScreen);
    }

    setHealth(hp, maxHp) {
        const pct = Math.max(0, Math.min(100, (hp / maxHp) * 100));
        this.hpFill.style.width = pct + '%';
        if (hp < 30) {
            this.healthContainer.classList.add('low');
        } else {
            this.healthContainer.classList.remove('low');
        }
    }

    setAmmo(current, reserve, isReloading) {
        if (current === -1) {
            this.ammoCurrent.textContent = '∞';
            this.ammoReserve.textContent = '';
        } else {
            this.ammoCurrent.textContent = current;
            this.ammoReserve.textContent = reserve === -1 ? '/ ∞' : '/ ' + reserve;
        }
        if (isReloading) {
            this.ammoContainer.classList.add('reloading');
        } else {
            this.ammoContainer.classList.remove('reloading');
        }
    }

    setWeaponSlots(weapons, activeIndex) {
        this.slots.innerHTML = '';
        for (let i = 0; i < weapons.length; i++) {
            const w = weapons[i];
            const div = document.createElement('div');
            div.className = 'slot' + (i === activeIndex ? ' active' : '');
            
            const num = document.createElement('span');
            num.className = 'num';
            num.textContent = (i + 1);
            div.appendChild(num);

            const name = document.createElement('span');
            name.className = 'name';
            name.textContent = w.name;
            div.appendChild(name);

            if (w.currentAmmo !== undefined) {
                const ammo = document.createElement('span');
                ammo.className = 'sammo';
                if (w.currentAmmo === -1) {
                    ammo.textContent = '∞';
                } else {
                    ammo.textContent = w.currentAmmo + (w.reserveAmmo === -1 ? '' : '/' + w.reserveAmmo);
                }
                div.appendChild(ammo);
            }
            
            this.slots.appendChild(div);
        }
    }

    setWave(n) {
        this.waveTxt.textContent = 'WAVE ' + n;
    }

    setScore(score) {
        this.scoreTxt.textContent = String(score).padStart(6, '0');
    }

    setKills(n) {
        this.tally.innerHTML = '';
        for (let i = 0; i < n; i++) {
            const el = document.createElement('i');
            if ((i + 1) % 5 === 0) {
                el.className = 'cross';
            }
            this.tally.appendChild(el);
        }
    }

    setCombo(text) {
        this.comboTxt.textContent = text;
        if (text) {
            this.comboTxt.classList.remove('anim');
            void this.comboTxt.offsetWidth;
            this.comboTxt.classList.add('anim');
        }
    }

    setCrosshairSpread(px) {
        this.crosshair.style.setProperty('--s', px + 'px');
    }

    setCrosshairStyle(type) {
        if (type === 'katana') {
            this.crosshair.classList.add('katana');
        } else {
            this.crosshair.classList.remove('katana');
        }
    }

    setAds(on) {
        if (on) {
            this.crosshair.classList.add('ads');
        } else {
            this.crosshair.classList.remove('ads');
        }
    }

    showGrappleReticle(state) {
        this.grappleRet.className = 'grapple-ret ' + state;
    }

    showScope(on) {
        if (on) {
            this.scope.classList.add('on');
        } else {
            this.scope.classList.remove('on');
        }
    }

    hitmarker(isKill, isCrit) {
        this.hitmarkerEl.className = 'hitmarker show';
        if (isKill) this.hitmarkerEl.classList.add('kill');
        if (isCrit) this.hitmarkerEl.classList.add('crit');
        setTimeout(() => {
            this.hitmarkerEl.classList.remove('show');
        }, 150);
    }

    showMessage(main, sub) {
        this.msgMain.textContent = main;
        this.msgSub.textContent = sub || '';
        this.msgMain.classList.remove('show');
        void this.msgMain.offsetWidth; // force reflow for animation restart
        this.msgMain.classList.add('show');
        if (this.msgTimeout) clearTimeout(this.msgTimeout);
        this.msgTimeout = setTimeout(() => {
            this.msgMain.classList.remove('show');
        }, 2500);
    }

    addKillFeed(text, points) {
        const el = document.createElement('div');
        el.className = 'item';
        el.innerHTML = text + (points ? ' <span>+' + points + '</span>' : '');
        this.killfeed.appendChild(el);
        setTimeout(() => {
            el.classList.add('fade');
            setTimeout(() => el.remove(), 500);
        }, 3000);
    }

    addDamageIndicator(angle) {
        const el = document.createElement('div');
        el.className = 'dmg-ind';
        el.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'rad)';
        this.dmgIndContainer.appendChild(el);
        setTimeout(() => el.remove(), 1000);
    }

    showBossBar(name, hp, maxHp) {
        this.bossbarContainer.classList.add('show');
        this.bossName.textContent = name;
        const pct = Math.max(0, Math.min(100, (hp / maxHp) * 100));
        this.bossFill.style.width = pct + '%';
    }

    hideBossBar() {
        this.bossbarContainer.classList.remove('show');
    }

    setFocusMeter(pct, ready) {
        this.focusMeterFill.style.height = Math.max(0, Math.min(100, pct * 100)) + '%';
        if (ready) {
            this.focusMeterContainer.classList.add('ready');
        } else {
            this.focusMeterContainer.classList.remove('ready');
        }
    }

    showFocusMark(x, y, on) {
        if (on) {
            this.focusMark.classList.add('show');
            this.focusMark.style.left = x + 'px';
            this.focusMark.style.top = y + 'px';
        } else {
            this.focusMark.classList.remove('show');
        }
    }

    setGrappleStamina(pct) {
        if (pct < 1) {
            this.gstam.classList.add('show');
            this.gstamFill.style.width = (pct * 100) + '%';
        } else {
            this.gstam.classList.remove('show');
        }
    }

    setGrenades(count) {
        this.nades.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const n = document.createElement('div');
            n.className = 'nade';
            this.nades.appendChild(n);
        }
    }

    showMenu() {
        this.menuScreen.style.display = 'flex';
        this.el.classList.add('nogame');
    }

    hideMenu() {
        this.menuScreen.style.display = 'none';
        this.el.classList.remove('nogame');
    }

    showGameOver(stats, waveArg, killsArg) {
        let score = 0, wave = 0, kills = 0, bestScore = 0;
        if (typeof stats === 'object' && stats !== null) {
            score = stats.score || 0;
            wave = stats.wave || 0;
            kills = stats.kills || 0;
            bestScore = stats.bestScore || 0;
        } else {
            score = stats || 0;
            wave = waveArg || 0;
            kills = killsArg || 0;
            bestScore = parseInt(localStorage.getItem('dd_bestScore')) || score;
        }
        this.goScreen.style.display = 'flex';
        this.goStats.textContent = `you survived ${wave} waves · ${kills} kills · score ${score} · best ${bestScore}`;
        this.el.classList.add('nogame');
    }

    hideGameOver() {
        this.goScreen.style.display = 'none';
        this.el.classList.remove('nogame');
    }

    setGameActive(on) {
        if (on) {
            this.el.classList.remove('nogame');
        } else {
            this.el.classList.add('nogame');
        }
    }

    show() { this.setGameActive(true); }
    hide() { this.setGameActive(false); }
    showPause() {}
    updateHealth(hp, maxHp) { this.setHealth(hp, maxHp); }
    updateScore(score, best) { this.setScore(score); }
    updateKills(k) { this.setKills(k); }
    updateCombo(combo) { this.setCombo(combo && combo.count > 1 ? `${combo.count}x COMBO (${combo.multiplier.toFixed(1)}x)` : ''); }
    addScore(pts, label) { this.addKillFeed(label, pts); }
    announce(main, sub) { this.showMessage(main, sub); }
    setFocus(pct, ready) { this.setFocusMeter(pct, ready); }
    setSniperScope(on) { this.showScope(on); }
    setReloading(on) {}
}
