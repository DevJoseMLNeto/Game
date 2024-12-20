// VARIAVEIS
import { romance } from "./script3.js"


const heroi = document.getElementById('kaique')
const wall = document.getElementById("wall")
const grama = document.getElementById("grama")
const mapa = document.getElementById("mapa")
export{heroi,grama,mapa,wall}

function gerarPosKaique(){

  let largWall = wall.offsetWidth/2
  let altWall = wall.offsetHeight/2

  heroi.style.left=largWall + "px"
  heroi.style.top=altWall + "px"


}

function gerarPosMapa(){

    let largmapa = mapa.offsetWidth 
    let altmapa = mapa.offsetHeight

    grama.style.left=-1*(wall.offsetLeft+heroi.offsetLeft-largmapa/2)+"px"
    grama.style.top=-1*(wall.offsetTop+heroi.offsetTop-altmapa/2)+"px"
    console.log(grama.offsetLeft)
    console.log(grama.offsetTop)
  }





// DEFININDO POSIÇÃO DO KAIQUE



  window.addEventListener("load",(evt)=>{
    gerarPosKaique()
    gerarPosMapa()
    evt.preventDefault()

  })


  // DEFININDO MOVIMENTO DO KAIQUE

const btns_mobile = {
  up: document.getElementById("btn1"),
  left: document.getElementById("btn2"),
  down: document.getElementById("btn3"),
  right: document.getElementById("btn4"),
}

const movimento = {
  up :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).top)
    heroi.style.top=posAtual-10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).top)
    grama.style.top=posGramaAtual+10+"px"
  },
  down :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).top)
    heroi.style.top=posAtual+10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).top)
    grama.style.top=posGramaAtual-10+"px"
  },
  left :(heroi,grama)=>{

    let posAtual = parseInt(getComputedStyle(heroi).left)
    heroi.style.left=posAtual-10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).left)
    grama.style.left=posGramaAtual+10+"px"
  },
  right :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).left)
    heroi.style.left=posAtual+10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).left)
    grama.style.left=posGramaAtual-10+"px"
  }
}

document.addEventListener("keydown",(evt)=>{
  if(evt.code==="ArrowUp"){
    if(parseInt(getComputedStyle(heroi).top)<=0){
    }
    movimento.up(heroi,grama)
    romance([...document.querySelectorAll(".inimigo")])
  }
  if(evt.code=="ArrowLeft"){
    if(parseInt(getComputedStyle(heroi).left)<=0){
      evt.code.preventDefault()
    }
    movimento.left(heroi,grama)
    romance([...document.querySelectorAll(".inimigo")])

  }
  if(evt.code=="ArrowRight"){
    if(parseInt(getComputedStyle(heroi).left)>=3560){
      evt.code.preventDefault()
      
    }
    movimento.right(heroi,grama)
    romance([...document.querySelectorAll(".inimigo")])

  }
  if(evt.code=="ArrowDown"){
    if(parseInt(getComputedStyle(heroi).top)>=3560){
      evt.code.preventDefault()
      
    }
    movimento.down(heroi,grama)
    romance([...document.querySelectorAll(".inimigo")])
    

  }
})

btns_mobile.up.addEventListener("touchmove",(evt)=>{
  if(parseInt(getComputedStyle(heroi).top)<=0){
  }
  movimento.up(heroi,grama)
  romance([...document.querySelectorAll(".inimigo")])
})

btns_mobile.down.addEventListener("touchmove",(evt)=>{
  if(parseInt(getComputedStyle(heroi).top)>=3560){
  }
  movimento.down(heroi,grama)
  romance([...document.querySelectorAll(".inimigo")])
})

btns_mobile.left.addEventListener("touchmove",(evt)=>{
  if(parseInt(getComputedStyle(heroi).left)<=0){
    evt.code.preventDefault()
  }
  movimento.left(heroi,grama)
  romance([...document.querySelectorAll(".inimigo")])
})

btns_mobile.right.addEventListener("touchmove",(evt)=>{
  if(parseInt(getComputedStyle(heroi).left)>=3560){
    evt.code.preventDefault()
    
  }
  movimento.right(heroi,grama)
  romance([...document.querySelectorAll(".inimigo")])
})