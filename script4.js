// AQUI ABRIRÁ O CENARIO PARA QUE HAJA O COMBATE ENTRE NOSSO HEROI KAIQUE E SEU INIMIGO SMOGLE

import { hab1 } from "./config.js"
import { mapa } from "./script.js"
import { movimentoInimigo } from "./script2.js"
const cenarioCombate = document.getElementById("cenarioCombate")
const main = document.getElementById("main")
const pisca = document.getElementById("pisca")
let index = false

function initCenario(valor){
    if (valor) {
        mapa.style.order="1"
        cenarioCombate.style.order="0"
       movimentoInimigo([...document.querySelectorAll(".inimigo")])
    }
    hab1.addEventListener("click",(evt)=>{
        mapa.style.order="0"
        cenarioCombate.style.order="1"
       movimentoInimigo([...document.querySelectorAll(".inimigo")])
    })
}




export{initCenario} // EXPORTADO PARA SCRIPT3.JS