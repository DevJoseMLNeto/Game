// AQUI ABRIRÁ O CENARIO PARA QUE HAJA O COMBATE ENTRE NOSSO HEROI KAIQUE E SEU INIMIGO SMOGLE


import { mapa } from "./script.js"
const cenarioCombate = document.getElementById("cenarioCombate")
const main = document.getElementById("main")
const pisca = document.getElementById("pisca")

function initCenario(){
    mapa.style.display="none"
    cenarioCombate.style.display="flex"
    // pisca.style.display="flex"
    // pisca.style.position="absolute"
    // console.log("deu namoro")
    // setTimeout(() => {
    //     main.style.display="block"
    //     pisca.style.display="none"
    // }, 2000);

}

export{initCenario}