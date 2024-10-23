// AQUI ABRIRÁ O CENARIO PARA QUE HAJA O COMBATE ENTRE NOSSO HEROI KAIQUE E SEU INIMIGO SMOGLE

import { mapa } from "./script.js"


const cenarioCombate = document.getElementById("cenarioCombate")


function initCenario(valor){
    if (valor) {
        mapa.style.order="1"
        cenarioCombate.style.order="0"
    }
}




export{initCenario} // EXPORTADO PARA SCRIPT3.JS