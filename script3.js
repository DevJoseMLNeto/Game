// Aqui será desenvolvido o derradeiro entre o heroi kaique e seus inimigos

import { heroi, wall } from "./script.js";
import { initCenario } from "./script4.js";

let initCombate = false


function romance(enimies){
    let inimigos= enimies
    inimigos.forEach((el)=>{
        let encontro = new Promise((resolve, reject) => {
            setInterval(()=>{ 
                let inimigo = el.getBoundingClientRect()
                let heroiX =  heroi.getBoundingClientRect() 
                    if(heroiX.right>=inimigo.left && heroiX.left<=inimigo.right && heroiX.bottom >= inimigo.top && heroiX.top <= inimigo.bottom ){
                        resolve(true)
                    } 
            },10)
        })
        encontro.then((res)=>{
            initCenario()
        })
    })
}
    
window.addEventListener("load", ()=>{
        let inimigos = [...document.querySelectorAll(".inimigo")]
        romance(inimigos)
})


