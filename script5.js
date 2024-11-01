// AQUI SERA DESENVOLVIDO O COMBATE
import { returnMapa } from "./script4.js"
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
    constructor(heroiBase, btns_hab,inimigoBase, life_barr){
        this.life_barr=life_barr
        this.inimigoBase = inimigoBase
        this.heroiBase=heroiBase
        this.inimigoCombate=document.getElementById("inimigo_box")
        this.heroiCombate=document.getElementById("heroi_box")
        this.btns_hab=[btns_hab.hab1,btns_hab.hab2,btns_hab.hab3,btns_hab.hab4]
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
            this.activateHab=this.heroiBase.garrada
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
            this.desabilitar()
            this.heroiCombate.classList.add("ataqueNormal")
            this.inimigoCombate.classList.add("inimigoGolpeado")
            this.inimigoBase.vida=this.inimigoBase.vida-habilidadeAtivada[1]
            console.log(this.inimigoBase)
            this.finalCombate(this.inimigoBase.vida)
            setTimeout(()=>{
                this.heroiCombate.classList.remove("ataqueNormal")
                this.inimigoCombate.classList.remove("inimigoGolpeado")
            },1000)
            setTimeout(()=>{
                this.actionInimigo()
            },3000)       
        }

        if(habilidadeAtivada[2]==2){
            this.desabilitar()

            this.heroiCombate.classList.add("garrada")
            this.inimigoCombate.classList.add("inimigoGolpeado")
            this.inimigoBase.vida=this.inimigoBase.vida-habilidadeAtivada[1]
            console.log(this.inimigoBase)
            this.finalCombate(this.inimigoBase.vida)
            setTimeout(()=>{
                this.heroiCombate.classList.remove("garrada")
                this.inimigoCombate.classList.remove("inimigoGolpeado")
            },1000)
            setTimeout(()=>{
                this.actionInimigo()
            },3000)        
        }

        if(habilidadeAtivada[2]==3){
            this.desabilitar()

            if(this.heroiBase.vida <= 100){
                this.heroiBase.vida=this.heroiBase.vida+habilidadeAtivada[1]
            }
            setTimeout(()=>{
                this.actionInimigo()
            },3000)        
        }

        if(habilidadeAtivada[2]==4){
            this.desabilitar()

            this.heroiBase.atackNormal[1]=this.heroiBase.atackNormal[1]+habilidadeAtivada[1]
            setTimeout(()=>{
                this.actionInimigo()
            },3000)
        }
    }
    actionInimigo(){
        let habilidadeInimiga = Math.floor(Math.random()*2)
        if(habilidadeInimiga==0){
            this.inimigoCombate.classList.add("inimigoAtaqueNormal")
            this.heroiBase.vida = this.heroiBase.vida - this.inimigoBase.atackNormal
            this.life_barr.style.width=this.heroiBase.vida+"%"
            setTimeout(()=>{
                this.inimigoCombate.classList.remove("inimigoAtaqueNormal")
                this.habilitar()
            },1000)
            if(this.heroiBase.vida<=0){
                this.life_barr.style.width=0+"%"
            }
        }else if(habilidadeInimiga==1){
            this.inimigoBase.invertida
            this.heroiBase.vida = this.heroiBase.vida - this.inimigoBase.invertida
            this.life_barr.style.width=this.heroiBase.vida+"%"
            this.habilitar()

            if(this.heroiBase.vida<=0){
                this.life_barr.style.width=0+"%"
            }

        }
        
    }
    desabilitar(){
        this.btns_hab.map((el)=>{
            el.setAttribute("disabled","disabled")
        })
    }
    habilitar(){
        this.btns_hab.map((el)=>{
            el.removeAttribute("disabled")
        })
    }
    finalCombate(vidaInimigo){
        if(vidaInimigo<=0){
            this.inimigoCombate.firstElementChild.remove()
            this.returnMapa(true)
             
        }
    }
    returnMapa(index){
        if(index){
            
            returnMapa(index)
        }
    }
}


export {Combate}
export{positionCombate}  //EXPORTADO PARA SCRIPT3