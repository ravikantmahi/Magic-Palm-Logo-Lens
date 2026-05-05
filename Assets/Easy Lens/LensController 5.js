// Main Controller
//
// Made with Easy Lens

//@input Component.ScriptComponent palmFxCanvas
//@input Component.ScriptComponent handTracking
//@input Component.ScriptComponent summonSfx
//@input Component.ScriptComponent nielitLogoSticker
//@input Component.ScriptComponent spriteStore


try {

// Tunable parameters
var logoStartScale = 0.05; // initial hidden scale for 2D sticker
var logoEndScale = 0.5; // final visible scale for 2D sticker
var appearDuration = 0.45;
var glowBurstDuration = 0.35;
var sparklesDuration = 0.6;
var floatAmplitudePixels = 10; // vertical float in pixels
var floatSpeedHz = 0.5;
var slowRotationDegPerSec = 12;
var followSmoothness = 10.0; // higher = snappier
var sfxVolume = 0.85;
var maxSparkles = 22;
var sparkleMinSize = 6;
var sparkleMaxSize = 16;
var sparkleOutwardSpeedPx = 260;
var sparkleFadeOutDelay = 0.15;
var sparkleStrokeWeight = 2;

// Colors (0-1)
var glowColor = new vec4(0.55, 0.8, 1.0, 1.0); // soft blue
var glowRimColor = new vec4(1.0, 1.0, 1.0, 1.0); // white rim
var sparklesColor = new vec4(0.8, 0.95, 1.0, 1.0); // bluish white

// Feature toggles
var enableSparkles = true;
var enableGlow = true;
var enableSound = true;

// State
var screenSize = null;
var glowCanvas = null;
var isTracking = false;
var hasPlayedEntry = false;
var palmPosPx = new vec2(0, 0);
var targetPosPx = new vec2(0, 0);
var baseRotationDeg = 0;
var appearT = 0;
var entryStartTime = 0;
var sparkles = [];
var rngSeed = 0;

// Helpers
function rand() {
    // Simple LCG for deterministic bursts between resets
    rngSeed = (1103515245 * rngSeed + 12345) % 2147483648;
    return rngSeed / 2147483648;
}

function spawnSparkles(origin) {
    sparkles.length = 0;
    var count = maxSparkles;
    for (var i = 0; i < count; i++) {
        var ang = rand() * Math.PI * 2;
        var speed = sparkleOutwardSpeedPx * (0.6 + 0.4 * rand());
        var life = sparklesDuration * (0.75 + 0.5 * rand());
        var size = sparkleMinSize + (sparkleMaxSize - sparkleMinSize) * rand();
        sparkles.push({
            pos: new vec2(origin.x, origin.y),
            vel: new vec2(Math.cos(ang) * speed, Math.sin(ang) * speed),
            size: size,
            age: 0,
            life: life
        });
    }
}

function drawGlowAndSparkles(origin, tSinceStart) {
    if (!glowCanvas) return;

    var w = glowCanvas.getWidth();
    var h = glowCanvas.getHeight();

    glowCanvas.background(0, 0, 0, 0);

    // Additive blend for glow and sparkles
    glowCanvas.blendMode('add');

    // GLow burst
    if (enableGlow) {
        var glowPhase = MathUtils.clamp(tSinceStart / glowBurstDuration, 0, 1);
        // Ease out
        var ease = 1 - Math.pow(1 - glowPhase, 3);
        var maxRadius = Math.max(screenSize.x, screenSize.y) * 0.25;
        var radius = maxRadius * ease;

        glowCanvas.noStroke();
        // Inner core
        var coreAlpha = 220 * (1.0 - glowPhase);
        glowCanvas.fill(glowColor.x * 255, glowColor.y * 255, glowColor.z * 255, coreAlpha);
        glowCanvas.circle(origin.x, origin.y, radius * 1.1);

        // Rim
        var rimAlpha = 180 * (1.0 - glowPhase);
        glowCanvas.noFill();
        glowCanvas.stroke(glowRimColor.x * 255, glowRimColor.y * 255, glowRimColor.z * 255, rimAlpha);
        glowCanvas.strokeWeight(6);
        glowCanvas.circle(origin.x, origin.y, radius * 1.6);
    }

    // Sparkles
    if (enableSparkles) {
        glowCanvas.noFill();
        glowCanvas.stroke(sparklesColor.x * 255, sparklesColor.y * 255, sparklesColor.z * 255, 220);
        glowCanvas.strokeWeight(sparkleStrokeWeight);

        for (var i = 0; i < sparkles.length; i++) {
            var sp = sparkles[i];
            var a = sp.age / sp.life;
            if (a > 1) continue;

            var fade = 1.0;
            if (sp.age > sparkleFadeOutDelay) {
                var out = (sp.age - sparkleFadeOutDelay) / Math.max(0.0001, (sp.life - sparkleFadeOutDelay));
                fade = Math.max(0, 1 - out);
            }
            var alpha = Math.floor(255 * fade);

            glowCanvas.stroke(sparklesColor.x * 255, sparklesColor.y * 255, sparklesColor.z * 255, alpha);

            var dir = sp.vel.normalize();
            var tailLen = sp.size * (1.0 + 2.0 * a);
            var tailEnd = sp.pos.sub(dir.uniformScale(tailLen));
            glowCanvas.line(sp.pos.x, sp.pos.y, tailEnd.x, tailEnd.y);

            // Twinkle dot
            glowCanvas.noStroke();
            glowCanvas.fill(255, 255, 255, alpha);
            glowCanvas.circle(sp.pos.x, sp.pos.y, Math.max(2, sp.size * 0.35));
        }
    }

    glowCanvas.blendMode('normal');
}

function resetEntry() {
    hasPlayedEntry = false;
    appearT = 0;
    // Hide 2D sticker completely when palm not open
    if (script.nielitLogoSticker) {
        script.nielitLogoSticker.enabled = false;
        script.nielitLogoSticker.scale = new vec2(logoStartScale, logoStartScale);
        script.nielitLogoSticker.rotation = 0;
    }
    if (glowCanvas) {
        glowCanvas.background(0, 0, 0, 0);
    }
    sparkles.length = 0;
}

function startEntry(now) {
    hasPlayedEntry = true;
    entryStartTime = now;
    appearT = 0;
    rngSeed = Math.floor(now * 1000) % 2147483647;

    if (script.nielitLogoSticker) {
        script.nielitLogoSticker.enabled = true; // show only on open palm
        script.nielitLogoSticker.scale = new vec2(logoStartScale, logoStartScale);
    }
    if (enableSparkles) {
        spawnSparkles(palmPosPx);
    }

    if (enableSound && script.summonSfx) {
        script.summonSfx.volume = sfxVolume;
        script.summonSfx.loops = 0;
        script.summonSfx.play();
    }
}

function updateEntry(dt, now) {
    if (!hasPlayedEntry) return;

    // Appear animation (scale + fade-in)
    if (appearT < 1.0) {
        appearT = Math.min(1.0, appearT + dt / appearDuration);
    }

    // Smooth ease-out-back style scale
    var t = appearT;
    var c1 = 1.70158;
    var c3 = c1 + 1;
    var scaleEase = 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    var scaled = logoStartScale + (logoEndScale - logoStartScale) * scaleEase;

    if (script.nielitLogoSticker) {
        script.nielitLogoSticker.scale = new vec2(scaled, scaled);
        // Fade-in via easing by rotating and letting user set opacity visually; Sticker block has no alpha, so we mimic via scale ease only
        // Gentle float + slow rotation
        var floatOffset = Math.sin(now * Math.PI * 2 * floatSpeedHz) * (floatAmplitudePixels / Math.max(1, screenSize.y));
        script.nielitLogoSticker.position = new vec2(targetPosPx.x / screenSize.x, (targetPosPx.y + floatOffset) / screenSize.y);
        script.nielitLogoSticker.rotation = baseRotationDeg + slowRotationDegPerSec * (now - entryStartTime);
    }

    // Update glow/sparkles canvas
    var tSinceStart = now - entryStartTime;

    // Update sparkles physics
    if (enableSparkles) {
        for (var i = sparkles.length - 1; i >= 0; i--) {
            var sp = sparkles[i];
            sp.age += dt;
            if (sp.age > sp.life) {
                sparkles.splice(i, 1);
                continue;
            }
            sp.pos = new vec2(sp.pos.x + sp.vel.x * dt, sp.pos.y + sp.vel.y * dt);
            sp.vel = sp.vel.uniformScale(1.0 - 0.8 * dt);
        }
    }

    if (glowCanvas) {
        drawGlowAndSparkles(targetPosPx, tSinceStart);
    }
}

// Initialization on start
script.createEvent("OnStartEvent").bind(function() {
    // Create glow canvas and configure it
    glowCanvas = script.palmFxCanvas.createOnScreenCanvas();
    glowCanvas.background(0, 0, 0, 0);
    glowCanvas.noStroke();
    glowCanvas.noFill();
    glowCanvas.angleMode('degrees');

    // Cache size in pixels
    screenSize = new vec2(glowCanvas.getWidth(), glowCanvas.getHeight());

    // Init sticker texture from store if available
    if (script.spriteStore && script.nielitLogoSticker) {
        var texName = script.spriteStore.assetName0 || "user_asset_1";
        var tex = script.spriteStore.getTexture(texName);
        if (tex) {
            script.nielitLogoSticker.texture = tex;
        }
        // Start hidden
        script.nielitLogoSticker.scale = new vec2(logoStartScale, logoStartScale);
        script.nielitLogoSticker.rotation = 0;
        // Place off-screen initially (normalized coords); will be updated on tracking
        script.nielitLogoSticker.position = new vec2(0.5, 0.8);
        script.nielitLogoSticker.forceSafeArea = false;
    }

    resetEntry();
});

// Hand tracking events
script.handTracking.onLeftHandShown.add(function() {
    isTracking = true;
});
script.handTracking.onRightHandShown.add(function() {
    isTracking = true;
});
script.handTracking.onLeftHandHidden.add(function() {
    isTracking = false;
    resetEntry();
});
script.handTracking.onRightHandHidden.add(function() {
    isTracking = false;
    resetEntry();
});

// Open palm detection to trigger entry once per continuous detection
script.handTracking.onLeftPalmOpen.add(function() {
    if (!hasPlayedEntry) {
        startEntry(new Date().getTime() / 1000.0);
    }
});
script.handTracking.onRightPalmOpen.add(function() {
    if (!hasPlayedEntry) {
        startEntry(new Date().getTime() / 1000.0);
    }
});

// Close palm: hide immediately and reset so it can re-trigger on next open
script.handTracking.onLeftFistClosed.add(function() {
    resetEntry();
});
script.handTracking.onRightFistClosed.add(function() {
    resetEntry();
});

// Track hands every frame while visible, use default hand position/rotation
script.handTracking.onLeftTracking.add(function(data) {
    handleTrackingData(data);
});
script.handTracking.onRightTracking.add(function(data) {
    handleTrackingData(data);
});

function handleTrackingData(data) {
    // Cache 2D pixel pos for screen FX and sticker placement
    var px = new vec2(
        MathUtils.clamp(data.position2D.x, 0, 1) * screenSize.x,
        MathUtils.clamp(data.position2D.y, 0, 1) * screenSize.y
    );
    targetPosPx = new vec2(px.x, px.y);
    palmPosPx = targetPosPx;

    baseRotationDeg = -data.rotation2D;

    // Smoothly move sticker toward target position using exponential smoothing
    if (script.nielitLogoSticker && hasPlayedEntry) {
        var dt = getDeltaTime();
        var k = 1 - Math.pow(Math.E, -followSmoothness * dt);
        var current = new vec2(script.nielitLogoSticker.position.x * screenSize.x, script.nielitLogoSticker.position.y * screenSize.y);
        var newPos = vec2.lerp ? vec2.lerp(current, targetPosPx, k) : new vec2(
            current.x + (targetPosPx.x - current.x) * k,
            current.y + (targetPosPx.y - current.y) * k
        );
        script.nielitLogoSticker.position = new vec2(newPos.x / screenSize.x, newPos.y / screenSize.y);
        script.nielitLogoSticker.rotation = baseRotationDeg;
    }
}

// Per-frame update: animate entry, float, effects
script.createEvent("UpdateEvent").bind(function() {
    var now = new Date().getTime() / 1000.0;
    var dt = getDeltaTime();

    updateEntry(dt, now);
});

} catch(e) {
  print("error in controller");
  print(e);
}
