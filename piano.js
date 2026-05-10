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

document.addEventListener("keydown", async (e)=>{
  //console.log(e.key)
  let isKeyInList = keyboardKeys.includes(e.key)
  let key_index = 0
  //console.log(isKeyInList)
  if(isKeyInList === true){
    let key_index = keyboardKeys.indexOf(e.key)
    let note = gMajor[key_index]
    await Tone.start();
    pianoSynth.triggerAttackRelease(note, '4n');
    console.log(key_index)
  }
})










