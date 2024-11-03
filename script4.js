// AQUI ABRIRÁ O CENARIO PARA QUE HAJA O COMBATE ENTRE NOSSO HEROI KAIQUE E SEU INIMIGO SMOGLE

import { mapa } from "./script.js"


const cenarioCombate = document.getElementById("cenarioCombate")
const btns_for_mobile = document.querySelector(".btns_for_mobile")

function initCenario(valor){
    if (valor) {
        mapa.style.order="1"
        cenarioCombate.style.order="0"
        btns_for_mobile.style.display="none"
        console.log(btns_for_mobile)
    }
}

function returnMapa(valor){
    if (valor) {
        mapa.style.order="0"
        cenarioCombate.style.order="1"  
        btns_for_mobile.style.display="flex"
    }
}



export{returnMapa} // EXPORTADO PARA SCRIPT5.JS
export{initCenario} // EXPORTADO PARA SCRIPT3.JS