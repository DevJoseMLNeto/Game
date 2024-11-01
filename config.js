


let heroiBase =  {
    vida: 120,
    atackNormal: ["Ataque normal",20, 1],
    garrada: ["Garrada",30,  2],
    bigodada: ["Bigodada",20,  3],
    ofenca: ["Ofença",30, 4]

}

let heroiWolfFormBase = {
    vida: heroiBase.vida[1] + 50,
    atackNormal: heroiBase.atackNormal[1] + 20,
    Garrada: + 70,
    bigodada: heroiBase.bigodada[1] + 30,
    ofenca: heroiBase.ofenca[1] + 30
}

let inimigoBase = {
    vida: 150,
    atackNormal: 15,
    invertida: 20
} 

const btns_hab = {
    hab1 : document.getElementById("hab1"),
    hab2 : document.getElementById("hab2"),
    hab3 : document.getElementById("hab3"),
    hab4 : document.getElementById("hab4")
}

btns_hab.hab1.innerHTML=heroiBase.atackNormal[0]
btns_hab.hab2.innerHTML=heroiBase.garrada[0]
btns_hab.hab3.innerHTML=heroiBase.bigodada[0]
btns_hab.hab4.innerHTML=heroiBase.ofenca[0]
const life = document.getElementById("life_barr")
life.style.width=heroiBase.vida+"%"

export {heroiBase, heroiWolfFormBase, inimigoBase, btns_hab, life}