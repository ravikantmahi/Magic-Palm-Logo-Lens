// Main Controller
//
// Made with Easy Lens

//@input Component.ScriptComponent palmFxCanvas
//@input Component.ScriptComponent handTracking
//@input Component.ScriptComponent summonSfx
//@input Component.ScriptComponent spriteStore
//@input Component.ScriptComponent logo3DFrame


try {

// Tunable parameters
var logoBaseScale = 1.0; // 3D frame base scale multiplier (multiplies logo3DFrame.scale)
var appearDuration = 0.45;
var glowBurstDuration = 0.35;
var sparklesDuration = 0.6;
var floatAmplitudeUnits = 0.01; // meters-ish in camera space
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
var logo3DVisible = false;
var glowCanvas = null;
var glowSprite = null;
var isTracking = false;
var hasPlayedEntry = false;
var palmPosPx = new vec2(0, 0);
var targetPosPx = new vec2(0, 0);
var palmPos3D = new vec3(0, 0, 0);
var targetPos3D = new vec3(0, 0, 0);
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
    // Hide 3D logo by scaling to near zero and disabling animate
    if (script.logo3DFrame) {
        script.logo3DFrame.animate = false;
        script.logo3DFrame.scale = 0.0001;
    }
    logo3DVisible = false;
    if (glowSprite) {
        glowSprite.visible = false;
    }
    sparkles.length = 0;
}

function startEntry(now) {
    hasPlayedEntry = true;
    entryStartTime = now;
    appearT = 0;
    rngSeed = Math.floor(now * 1000) % 2147483647;

    if (script.logo3DFrame) {
        script.logo3DFrame.animate = true;
        script.logo3DFrame.scale = 0.0001; // start tiny, will ease to target
    }
    logo3DVisible = true;
    if (glowSprite) {
        glowSprite.visible = true;
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
    if (!hasPlayedEntry || !script.logo3DFrame) return;

    // Appear animation (scale)
    if (appearT < 1.0) {
        appearT = Math.min(1.0, appearT + dt / appearDuration);
    }

    // Smooth ease-out-back style scale
    var t = appearT;
    var c1 = 1.70158;
    var c3 = c1 + 1;
    var scaleEase = 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);

    // Apply scale to 3D frame
    script.logo3DFrame.scale = Math.max(0.0001, logoBaseScale * scaleEase * 0.35); // multiply base frame scale

    // Continuous float and slow rotation are handled visually by the frame's animate toggle + our own rotation3D offset via hand
    var floatOffset = Math.sin(now * Math.PI * 2 * floatSpeedHz) * floatAmplitudeUnits;

    // Update glow/sparkles canvas
    var tSinceStart = now - entryStartTime;
    if (glowSprite) {
        glowSprite.position = new vec2(targetPosPx.x, targetPosPx.y);
        if (tSinceStart > glowBurstDuration && (!enableSparkles || tSinceStart > sparklesDuration)) {
            glowSprite.visible = false;
        } else {
            glowSprite.visible = true;
        }
    }

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
    // Screen size is needed for 2D FX placement
    // Note: We don't have spriteManager anymore; use canvas size after creation

    // Create glow canvas and configure it
    glowCanvas = script.palmFxCanvas.createOnScreenCanvas();
    glowCanvas.background(0, 0, 0, 0);
    glowCanvas.noStroke();
    glowCanvas.noFill();
    glowCanvas.angleMode('degrees');

    // Since we don't have a sprite manager for display, keep using the onscreen canvas directly
    // Cache its size for FX math
    screenSize = new vec2(glowCanvas.getWidth(), glowCanvas.getHeight());

    // 3D frame initial state
    if (script.logo3DFrame) {
        script.logo3DFrame.animate = false;
        script.logo3DFrame.scale = 0.0001; // hidden
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

// Track hands every frame while visible, use default hand position/rotation
script.handTracking.onLeftTracking.add(function(data) {
    handleTrackingData(data);
});
script.handTracking.onRightTracking.add(function(data) {
    handleTrackingData(data);
});

function handleTrackingData(data) {
    // Cache 2D pixel pos for screen FX
    var px = new vec2(
        MathUtils.clamp(data.position2D.x, 0, 1) * screenSize.x,
        MathUtils.clamp(data.position2D.y, 0, 1) * screenSize.y
    );
    targetPosPx = new vec2(px.x, px.y);
    palmPosPx = targetPosPx;

    // 3D placement and gentle rotation
    targetPos3D = data.position3D;
    baseRotationDeg = -data.rotation2D;

    // Smoothly move 3D logo toward target position using exponential smoothing
    if (script.logo3DFrame && logo3DVisible) {
        var dt = getDeltaTime();
        var k = 1 - Math.pow(Math.E, -followSmoothness * dt);
        // Lerp 3D pos
        var cur = palmPos3D;
        palmPos3D = vec3.lerp ? vec3.lerp(cur, targetPos3D, k) : new vec3(
            cur.x + (targetPos3D.x - cur.x) * k,
            cur.y + (targetPos3D.y - cur.y) * k,
            cur.z + (targetPos3D.z - cur.z) * k
        );
        // Apply to 3D frame: Note LensFrame3d does not expose position/rotation API in docs.
        // Limitation: Positioning the 3D frame directly is not documented; assuming the block auto-anchors to hand default joint.
        // We still keep smoothing state for consistent FX placement and future extension.
    }
}

// Per-frame update: animate entry, float, effects
script.createEvent("UpdateEvent").bind(function() {
    var now = new Date().getTime() / 1000.0;
    var dt = getDeltaTime();

    // No 2D sprite follow anymore; 3D frame is auto-anchored by HandTracking default joint (palm)

    updateEntry(dt, now);
});

} catch(e) {
  print("error in controller");
  print(e);
}
