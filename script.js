import { renderKeys, play_with_keyboard as playPianoKeyboard, stop_keyboard as stopPianoKeyboard} from './piano.js';
import { renderSynthButton , play_with_keyboard as playSynthKeyboard, stop_keyboard as stopSynthKeyboard} from './synthpad.js';
import { renderGuitarStrings, play_with_keyboard as playStringKeyboard, stop_keyboard as stopStringKeyboard} from './strings.js';

const container = document.getElementById('instrument-container');
const renderContext = { container };

const instrumentBtns = document.querySelectorAll('.instrument-btn');


function stopAllKeyboardControls() {
  stopPianoKeyboard();
  stopSynthKeyboard();
  stopStringKeyboard();
}


instrumentBtns.forEach((btn) =>{

    btn.addEventListener("click", (event) =>{
        const instrument=event.currentTarget.getAttribute("data-instrument")

        switch(instrument){
            case "Piano": 
                stopAllKeyboardControls();
                renderKeys(renderContext);
                playPianoKeyboard();
                break;
            case "Synth":
                stopAllKeyboardControls();
                renderSynthButton(renderContext);
                playSynthKeyboard();
                break;
            case "String":
                stopAllKeyboardControls();
                renderGuitarStrings(renderContext);
                playStringKeyboard();
                break;
        }
    });
    
})


