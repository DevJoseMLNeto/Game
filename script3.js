// Aqui será desenvolvido o derradeiro entre o heroi kaique e seus inimigos
import { heroi} from "./script.js";
import { initCenario } from "./script4.js";
import { positionCombate, Combate } from "./script5.js";
import { heroiBase, btns_hab, inimigoBase, life } from "./config.js";


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
            new Combate(heroiBase, btns_hab, inimigoBase, life).habClick()
            return true
        }
    })
    
}
    


export{romance} //EXPORTADO PARA SCRIPT.JS


