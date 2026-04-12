const Tone = window.Tone;

const pianoReverb = new Tone.Reverb({
  decay: 4.1,
  wet: 0.22,
}).toDestination();

const pianoSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: 'triangle2',
  },
  envelope: {
    attack: 0.002,
    decay: 0.7,
    sustain: 0.22,
    release: 2.6,
  },
  volume: -7,
}).connect(pianoReverb);

const gMajor = ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5'];


//this function creates the key through css/js

function createPianoKey(note){
const key = document.createElement("div");
key.className = "Key"
key.setAttribute("data-note", "test");

return key;

}


export function renderKeys({container}){
container.innerHTML = '';
const key = createPianoKey("tesr")

container.appendChild(key)
}










