// demos.js

const demoConfigs = [
    // Demo 1 
    {
        tempo: 120, skin: 'dark', globalLoopBeats: 4, masterVolume: 0.75,
        isChorusOn: false, chorusRate: 1.0, chorusDepth: 0.005, chorusFeedback: 0.0, chorusMix: 0.0,
        isFlangerOn: false, flangerRate: 0.5, flangerDepth: 0.002, flangerFeedback: 0.0, flangerMix: 0.0,
        isPhaserOn: false, phaserRate: 0.2, phaserDepth: 1.0, phaserFeedback: 0.0, phaserFrequency: 300, phaserStages: 4, phaserMix: 0.0,
        isReverbOn: false, reverbType: 'hall', reverbAmount: 0.0, reverbDecay: 1.0, reverbDiffusion: 0.5, reverbLowpass: 8000, reverbHighpass: 0,
        delayInstances: [],
        isHumanizerOn: false, humanizeTiming: 0, humanizeVelocity: 0, humanizePan: 0,
        humanizerControlsCollapsed: true, effectsControlsCollapsed: true,
        sequencers: [
            { id: 1, circles: [{ x: 1, velocity: 100, pan: 0 }, { x: 400, velocity: 100, pan: 0 } ], channel: "1", note: "36", wavFileName: "Kick_01.wav", isMuted: false, volume: 0.5, pan: 0, phase: 0, editMode: "add"},
            { id: 2, circles: [{ x: 200, velocity: 100, pan: 0 }, { x: 600, velocity: 100, pan: 0 } ], channel: "2", note: "40", wavFileName: "Snare_01.wav", isMuted: false, volume: 0.5, pan: 0, phase: 0, editMode: "add"},
            { id: 3, circles: [{ x: 200, velocity: 90, pan: -0.2 }, { x: 600, velocity: 90, pan: 0.2 }], division: "1/4", channel: "3", note: "46", wavFileName: "Shaker.wav", isMuted: false, volume: 0.6, pan: 0, phase: 0, editMode: "add", presetRhythm: "off" }
        ]
    },
    // Demo 2 
    {
        tempo: 100, skin: 'blue-wave', globalLoopBeats: 4, masterVolume: 0.75, humanizerControlsCollapsed: true, effectsControlsCollapsed: true,
        sequencers: [
            { id: 1, circles: [{ x: 1, velocity: 110, pan: 0 }], channel: "1", note: "36", wavFileName: "Impact_1.wav", isMuted: false, volume: 0.4, pan: 0, phase: 0, editMode: "add", presetRhythm: "off" },
            { id: 2, circles: [{ x: 350, velocity: 95, pan: -0.3 }, { x: 750, velocity: 95, pan: 0.3 }], channel: "2", note: "38", wavFileName: "Conga_Low.wav", isMuted: false, volume: 0.7, pan: 0, phase: 0, editMode: "add", presetRhythm: "off" },
            { id: 3, circles: [{ x: 200, velocity: 80, pan: -0.5 }, { x: 400, velocity: 80, pan: 0 }, { x: 600, velocity: 80, pan: 0.5 }, { x: 800, velocity: 80, pan: 0.7 }], channel: "3", note: "42", wavFileName: "Shaker.wav", isMuted: false, volume: 1.0, pan: 0, phase: 0, editMode: "add", presetRhythm: "off" }
        ]
    }
];
