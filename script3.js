// Aqui será desenvolvido o derradeiro entre o heroi kaique e seus inimigos

import { heroi, wall } from "./script.js";
import { initCenario } from "./script4.js";




function romance(enimies){
    let inimigos= enimies
    inimigos.forEach((el)=>{
        let encontro = new Promise((resolve, reject) => {
                let inimigo = el.getBoundingClientRect()
                let heroiX =  heroi.getBoundingClientRect() 
                    if(heroiX.right>=inimigo.left && heroiX.left<=inimigo.right && heroiX.bottom >= inimigo.top && heroiX.top <= inimigo.bottom ){
                        resolve(true)
                    }
        })
        encontro.then((res)=>{
            initCenario(true)
        })
    })
}
    


export{romance} //EXPORTADO PARA SCRIPT.JS


