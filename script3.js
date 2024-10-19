// Aqui será desenvolvido o derradeiro entre o heroi kaique e seus inimigos

import { heroi, wall } from "./script.js";
import { initCenario } from "./script4.js";
import { positionCombate } from "./script5.js";



function romance(enimies){
    let inimigos = enimies
    inimigos.filter((el)=>{
        let encontro = new Promise((resolve, reject) => {
                let inimigo = el.getBoundingClientRect()
                let heroiX =  heroi.getBoundingClientRect() 
                    if(heroiX.right>=inimigo.left && heroiX.left<=inimigo.right && heroiX.bottom >= inimigo.top && heroiX.top <= inimigo.bottom ){
                        resolve(true)
                    }
        })
        encontro.then((res)=>{
            initCenario(res)

        })
        let inimigo = el.getBoundingClientRect()
        let heroiX =  heroi.getBoundingClientRect()
        if(heroiX.right>=inimigo.left && heroiX.left<=inimigo.right && heroiX.bottom >= inimigo.top && heroiX.top <= inimigo.bottom ){
            new positionCombate(true,null).positionHeroi()
            new positionCombate(true,el).positionEnemy()
            return true
        }
    })
    
}
    


export{romance} //EXPORTADO PARA SCRIPT.JS


