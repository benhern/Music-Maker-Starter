import { renderKeys } from './piano.js';
// import { renderSynth } from './synthpad.js';
// import { renderStrings } from './strings.js';

const container = document.getElementById('instrument-container');
const renderContext = { container };

const instrumentBtns = document.querySelectorAll('.instrument-btn');


instrumentBtns.forEach((btn) =>{

    btn.addEventListener("click", (event) =>{
        const instrument=event.currentTarget.getAttribute("data-instrument")

        switch(instrument){
            case "Piano": 
                renderKeys(renderContext);
        }
    });





    
})


