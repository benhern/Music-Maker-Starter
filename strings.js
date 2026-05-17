const Tone = window.Tone;

const stringReverb = new Tone.Reverb({
  decay: 7.5,
  wet: 0.5,
}).toDestination();

const stringSynth = new Tone.PluckSynth({
  attackNoise: 0.4,
  dampening: 900,
  resonance: 0.98,
  volume: -7,
}).connect(stringReverb);


const guitarNotes = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];
const keyboardKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
let keyboardListenerAttached = false;

function createGuitarString(note){
  const string = document.createElement("div");
  string.className = "String"
  string.setAttribute("data-note", note)

  return string;

  

}




export function renderGuitarStrings({container}){
  container.innerHTML = '';
  const guitar = document.createElement("div")
  guitar.className = "guitar"

  guitarNotes.forEach((note)=>{
    const string = createGuitarString(note)
    string.addEventListener('click', async () =>{
      await Tone.start();
      stringSynth.triggerAttackRelease(note, '4n');
    });
  guitar.appendChild(string)

  });
container.appendChild(guitar)
}


async function handleKeydown(e){
  if (keyboardKeys.includes(e.key)) {
    await Tone.start();
    const noteIndex = keyboardKeys.indexOf(e.key);
    const playNote = guitarNotes[noteIndex];
    stringSynth.triggerAttackRelease(playNote, '2n');
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
