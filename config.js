


let heroiBase =  {
    vida: 100,
    atackNormal: ["Ataque normal",20, 1],
    jumpuda: ["Jumpada",30,  2],
    bigodada: ["Bigodada",50,  3],
    ofenca: ["Ofença",10, 4]

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

const btns_hab = {
    hab1 : document.getElementById("hab1"),
    hab2 : document.getElementById("hab2"),
    hab3 : document.getElementById("hab3"),
    hab4 : document.getElementById("hab4")
}

btns_hab.hab1.innerHTML=heroiBase.atackNormal[0]
btns_hab.hab2.innerHTML=heroiBase.jumpuda[0]
btns_hab.hab3.innerHTML=heroiBase.bigodada[0]
btns_hab.hab4.innerHTML=heroiBase.ofenca[0]
const life = document.getElementById("life_barr")
life.style.width=heroiBase.vida+"%"

export {heroiBase, heroiWolfFormBase, inimigoBase, btns_hab}