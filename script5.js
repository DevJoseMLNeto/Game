// AQUI SERA DESENVOLVIDO O COMBATE
import { heroi } from "./script.js";

const heroiSide = document.getElementById("heroiSide")
const enemyiSide = document.getElementById("enemyiSide")
class positionCombate{
    constructor(initC, inimigo){
        this.initC = initC
        this.inimigo = inimigo

    }
    positionHeroi(){
    
    if(this.initC){
        heroiSide.innerHTML=`<div class="kaiqueCombate" id="kaiqueCombate"></div>`
    }
    }
    positionEnemy(){
        if(this.initC){
            this.inimigo.classList.remove("inimigo")
            this.inimigo.classList.add("inimigoCombate")
            enemyiSide.appendChild(this.inimigo)
        }
    }
}

export{positionCombate}