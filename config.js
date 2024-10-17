
let heroiBase =  {
    vida: 100,
    atackNormal: ["Ataque normal",20],
    jumpuda: ["Jumpada",30],
    bigodada: ["Bigodada",50],
    ofenca: ["Ofença",10]

}

let heroiWolfFormBase = {
    vida: heroiBase.vida + 50,
    atackNormal: heroiBase.atackNormal + 20,
    jump: heroiBase.jump,
    bigodada: heroiBase.bigodada+30,
    Garrada: 100

}

let inimigoBase = {
    vida: 150,
    atackNormal: 15,
    invertida: 30
} 

const hab1 = document.getElementById("hab1").innerHTML=heroiBase.atackNormal[0]
const hab2 = document.getElementById("hab2").innerHTML=heroiBase.jumpuda[0]
const hab3 = document.getElementById("hab3").innerHTML=heroiBase.bigodada[0]
const hab4 = document.getElementById("hab4").innerHTML=heroiBase.ofenca[0]
const life = document.getElementById("life_barr").style.width=heroiBase.vida+"%"

export {heroiBase, heroiWolfFormBase, inimigoBase}