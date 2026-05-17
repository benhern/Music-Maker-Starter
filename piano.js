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
    attack: 0,
    decay: 0.7,
    sustain: 0.2,
    release: 0.5,
  },
  volume: -7,
}).connect(pianoReverb);

const gMajor = ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'];
const keyboardKeys = ['1','2','3','4','5','6','7','8']
let keyboardListenerAttached = false;


//this function creates the key through css/js
function createPianoKey(note){
  const key = document.createElement("div");
  key.className = "Key"
  key.setAttribute("data-note", note);

  return key;

}


export function renderKeys({container}){
  container.innerHTML = '';
  

  gMajor.forEach((note)=>{
    const key = createPianoKey(note)
    container.appendChild(key)

    key.addEventListener('click', async () => {
      await Tone.start();
      pianoSynth.triggerAttackRelease(note, '4n');
    });
  })

}

async function handleKeydown(e){
  if (keyboardKeys.includes(e.key)) {
    await Tone.start();
    const noteIndex = keyboardKeys.indexOf(e.key);
    const playNote = gMajor[noteIndex];
    pianoSynth.triggerAttackRelease(playNote, '2n');
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







