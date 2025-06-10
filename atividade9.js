const readline = require("readline-sync")
let dinheiro = readline.questionFloat("Quanto têm em sua carteira?")

let conversao = dinheiro / 3.45

console.log("O valor de R$" + dinheiro + "equivale a U$" + conversao.toFixed(2)) 