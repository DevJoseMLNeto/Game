// AQUI ABRIRÁ O CENARIO PARA QUE HAJA O COMBATE ENTRE NOSSO HEROI KAIQUE E SEU INIMIGO SMOGLE

import { hab1 } from "./config.js"
import { mapa } from "./script.js"
import { movimentoInimigo } from "./script2.js"
const cenarioCombate = document.getElementById("cenarioCombate")
const main = document.getElementById("main")
const pisca = document.getElementById("pisca")

function initCenario(valor){
    let index = false
    if (valor) {
        mapa.style.order="1"
        cenarioCombate.style.order="0"
        index=true
        movimentoInimigo(null, index)
    }
    hab1.addEventListener("click",(evt)=>{
        mapa.style.order="0"
        cenarioCombate.style.order="1"
        index=false
        movimentoInimigo([...document.querySelectorAll(".inimigo")], index)
    })
}




export{initCenario} // EXPORTADO PARA SCRIPT3.JS