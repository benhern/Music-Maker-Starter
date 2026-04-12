const Tone = window.Tone;

const stringReverb = new Tone.Reverb({
  decay: 7.5,
  wet: 0.5,
}).toDestination();

const pianoSynth = new Tone.PluckSynth({
  attackNoise: 0.7,
  dampening: 900,
  resonance: 0.98,
  volume: -10,
}).connect(stringReverb);


const guitarNotes = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

