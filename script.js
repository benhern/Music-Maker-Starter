import { renderKeys} from './piano.js';
import { renderSynthButton} from './synthpad.js';
import { renderGuitarStrings} from './strings.js';

const container = document.getElementById('instrument-container');
const renderContext = { container };

const instrumentBtns = document.querySelectorAll('.instrument-btn');


instrumentBtns.forEach((btn) =>{

    btn.addEventListener("click", (event) =>{
        const instrument=event.currentTarget.getAttribute("data-instrument")

        switch(instrument){
            case "Piano": 
                renderKeys(renderContext);
                break;
            case "Synth":
                renderSynthButton(renderContext);
                break;
            case "String":
                renderGuitarStrings(renderContext);
                break;
        }
    });





    
})


https://prod.liveshare.vsengsaas.visualstudio.com/join?931FB3964471E3058E58E3F5E3DF29CA690C