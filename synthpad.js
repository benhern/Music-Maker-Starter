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
const keyboardKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
let keyboardListenerAttached = false;


function createSynthButton(note){
  const button = document.createElement("div")
  button.className = "synth-buttons"
  button.setAttribute("data-note", note);
  
  return button;
}


export function renderSynthButton({container}){
  container.innerHTML='';
  const synthGrid = document.createElement("div")
  synthGrid.className = "synth-grid"
  
  gMajorBass.forEach((note)=>{
    const button = createSynthButton(note)
    button.addEventListener('click', async () => {
      await Tone.start();
      synthPads.triggerAttackRelease(note, '4n');
    });
    synthGrid.appendChild(button)

  });
container.appendChild(synthGrid)
}


async function handleKeydown(e){
  if (keyboardKeys.includes(e.key)) {
    await Tone.start();
    const noteIndex = keyboardKeys.indexOf(e.key);
    const playNote = gMajorBass[noteIndex];
    synthPads.triggerAttackRelease(playNote, '2n');
  }
}


export function play_with_keyboard() {
  if (keyboardListenerAttached) return;

  document.addEventListener('keydown', handleKeydown);
  keyboardListenerAttached = true;
}

export function stop_keyboard() {
  if (!keyboardListenerAttached) return;

  document.removeEventListener('keydown', handleKeydown);
  keyboardListenerAttached = false;
}