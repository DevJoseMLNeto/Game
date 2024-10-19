import { heroi, grama, mapa,wall } from "./script.js";


    //Transformar em uma classe
   function gerarInimigo(wall){
        for(let i = 0; i < 50; i++){
            let inimigo = document.createElement("div")

            let posX=Math.floor(Math.random()*wall.offsetWidth-80).toString()
            let lastStringPosX = posX.at(posX.lastIndexOf(posX.slice(-1)))
            if (lastStringPosX != "0") {
               posX = posX.replace(lastStringPosX, "0")
            }

            let posY=Math.floor(Math.random()*wall.offsetHeight-80).toString()
            let lastIndexPosY = posY.lastIndexOf(posY.slice(-1))
            let lastStringPosY = posY.at(lastIndexPosY)
            if (lastStringPosY != "0") {
               posY = parseInt(posY.replace(lastStringPosY, "0"))
            }


            if(posX<=0){
                posX=0
            }
            if(posY<=0){
                posY=0
            }

            inimigo.setAttribute("class","inimigo")
            inimigo.setAttribute("id","inimigo")

            wall.appendChild(inimigo)
            inimigo.style.left=posX+"px"
            inimigo.style.top=posY+"px"
        }
    }

    function movimentoInimigo(inimigo){
        inimigo.forEach(element => {
 
         
 
             function movY(){
                 let dir = Math.floor(Math.random()*2+1)
                 if(dir == 1){dir=+1}else if(dir == 2){dir=-1}
                 let mov = setInterval(()=>{
                     let posY = parseInt(getComputedStyle(element).top)
                     if (posY>=3560 || posY<=0) {
 
                         dir=dir*(-1)
                     }
                     element.style.top=parseInt(getComputedStyle(element).top)+dir*(10)+"px"
                     
 
                 },10)
                 setTimeout(()=>{
                     clearInterval(mov)
                     movX()
                 },3000)
             }
             function movX(){
 
                 let dir = Math.floor(Math.random()*2+1)
                 if(dir == 1){dir=+1}else if(dir == 2){dir=-1}
                 
                 let movs = setInterval(()=>{
                     
                     let posX = parseInt(getComputedStyle(element).left)
                     if (posX>=3560 || posX<=0) {
                         dir=dir*(-1)
                     }
 
                     element.style.left=parseInt(getComputedStyle(element).left)+dir*(10)+"px"
                 },10)
 
                 setTimeout(()=>{
                     clearInterval(movs)
                     movY()
                 },3000)
             }
             let dirA = Math.floor(Math.random()*2+1)
             if(dirA==1){
                 movY()
             }else if(dirA==2){
                 movX()
             }
            
            
         });
     }
    

    window.addEventListener("load",(evt)=>{
        gerarInimigo(wall)
        movimentoInimigo([...document.querySelectorAll(".inimigo")])
    })

export {movimentoInimigo}
    
