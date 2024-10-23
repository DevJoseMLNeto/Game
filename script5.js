// AQUI SERA DESENVOLVIDO O COMBATE

const heroiSide = document.getElementById("heroi_box")
const enemyiSide = document.getElementById("inimigo_box")
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



// ******************  AQUI SERÁ DESENVOLVIDO O COMBATE *****************




class Combate{
    constructor(heroiBase, btns_hab ){

        this.heroiBase=heroiBase
        this.inimigoCombate=document.getElementById("inimigo_box")
        this.heroiCombate=document.getElementById("heroi_box")
        this.hab1=btns_hab.hab1
        this.hab2=btns_hab.hab2
        this.hab3=btns_hab.hab3
        this.hab4=btns_hab.hab4
        this.activateHab=null
    }

    habClick(){
        this.hab1.addEventListener("click",(evt)=>{
            this.activateHab=this.heroiBase.atackNormal
            this.habAction(this.activateHab)
        })
        this.hab2.addEventListener("click",(evt)=>{
            this.activateHab=this.heroiBase.jumpuda
            this.habAction(this.activateHab)
        })
        this.hab3.addEventListener("click",(evt)=>{
            this.activateHab=this.heroiBase.bigodada
            this.habAction(this.activateHab)
        })
        this.hab4.addEventListener("click",(evt)=>{
            this.activateHab=this.heroiBase.ofenca
            this.habAction(this.activateHab)
        })

    }
    habAction(habilidadeAtivada){
        if(habilidadeAtivada[2]==1){
            this.heroiCombate.classList.toggle("ataqueNormal")
            this.inimigoCombate.classList.toggle("inimigoGolpeado")
        }
    }
}

export {Combate}
export{positionCombate}  //EXPORTADO PARA SCRIPT3