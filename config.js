


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

const hab1 = document.getElementById("hab1")
hab1.innerHTML="clique para sair" //heroiBase.atackNormal[0]
const hab2 = document.getElementById("hab2")
hab2.innerHTML=heroiBase.jumpuda[0]
const hab3 = document.getElementById("hab3")
hab3.innerHTML=heroiBase.bigodada[0]
const hab4 = document.getElementById("hab4")
hab4.innerHTML=heroiBase.ofenca[0]
const life = document.getElementById("life_barr")
life.style.width=heroiBase.vida+"%"

export {heroiBase, heroiWolfFormBase, inimigoBase, hab1}