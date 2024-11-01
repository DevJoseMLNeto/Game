// AQUI ABRIRÁ O CENARIO PARA QUE HAJA O COMBATE ENTRE NOSSO HEROI KAIQUE E SEU INIMIGO SMOGLE

import { mapa } from "./script.js"


const cenarioCombate = document.getElementById("cenarioCombate")


function initCenario(valor){
    if (valor) {
        mapa.style.order="1"
        cenarioCombate.style.order="0"
    }
}

function returnMapa(valor){
    if (valor) {
        mapa.style.order="0"
        cenarioCombate.style.order="1"  
    }
}



export{returnMapa} // EXPORTADO PARA SCRIPT5.JS
export{initCenario} // EXPORTADO PARA SCRIPT3.JS