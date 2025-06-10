
const readline = require("readline-sync");

let numero = readline.questionFloat("Digite uma distância em METROS: ")

const km = numero/1000
const hm = numero/100
const dam = numero/10
const dm = numero * 10
const cm = numero * 100
const mm = numero * 1000

console.log("A distância de " + numero + "corresponde a:" )

console.log(km + "km")
console.log(hm + "hm")
console.log(dam + "dam")
console.log(dm + "dm")
console.log(cm + "cm")
console.log(mm + "mm")