const Tone = window.Tone;

const stringReverb = new Tone.Reverb({
  decay: 7.5,
  wet: 0.5,
}).toDestination();

const stringSynth = new Tone.PluckSynth({
  attackNoise: 0.7,
  dampening: 900,
  resonance: 0.98,
  volume: -10,
}).connect(stringReverb);


const guitarNotes = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

function createGuitarString(note){
  const string = document.createElement("div");
  string.className = "String"
  string.setAttribute("data-note", note)

  return string;

}




export function renderGuitarStrings({container}){
  container.innerHTML = '';

  guitarNotes.forEach((note)=>{
    const string = createGuitarString(note)
    container.appendChild(string)

    string.addEventListener('click', async () =>{
      await Tone.start();
      stringSynth.triggerAttackRelease(note, '4n');
    });


  });

}

