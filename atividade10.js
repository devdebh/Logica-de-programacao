const readline = require("readline-sync")

let paredeLargura = readline.questionFloat("Em metros quanto de largura tem a parede?")

let paredeAltura = readline.questionFloat("E a altura?")

let areaParede = paredeLargura * paredeAltura

let quantidadeDeTinta = areaParede / 3 

console.log("Para " + areaParede + "m2 serão necessários " + quantidadeDeTinta.toFixed (2) + "litros de tinta." )
