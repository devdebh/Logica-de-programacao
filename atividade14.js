const readline = require("readline-sync")

let km = readline.questionFloat("Quantos km o seu carro alugado rodou?")
let dias = readline.questionFloat("Por quantos dias você ficou com este carro?")

let valorAluguel = (dias * 90) + (km * 0.20)

console.log("Valor do km: R$" + (km*0.20).toFixed(2))
console.log("Valor dos dias: R$" + (dias*90).toFixed(2))
console.log("Valor total a pagar R$" + valorAluguel.toFixed(2))
