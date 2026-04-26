const Tone = window.Tone;

const synthReverb = new Tone.Reverb({
  decay: 5.5,
  wet: 0.3,
}).toDestination();

const synthPads = new Tone.MonoSynth({
  oscillator: {
    type: 'sawtooth',
  },
  envelope: {
    attack: 0.08,
    decay: 0.35,
    sustain: 0.55,
    release: 1.8,
  },
  filter: {
    Q: 2,
    type: 'lowpass',
    rolloff: -24,
  },
  filterEnvelope: {
    attack: 0.03,
    decay: 0.28,
    sustain: 0.35,
    release: 1.2,
    baseFrequency: 180,
    octaves: 3.6,
  },
  volume: -8,
}).connect(synthReverb);

const gMajorBass = ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4', 'G4', 'A4'];

function createSynthButton(note){
  const button = document.createElement("div")
  button.className = "synth-buttons"
  button.setAttribute("data-note", note);
  
  return button;
}


export function renderSynthButton({container}){
  container.innerHTML='';
  
gMajorBass.forEach((note)=>{
  const button = createSynthButton(note)



})



https://prod.liveshare.vsengsaas.visualstudio.com/join?AB8300CF7530556DD2803F08FB1ACCB5C1B0




