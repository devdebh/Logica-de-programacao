const readline = require("readline-sync")

let numero = readline.questionFloat("Digite um número:")
const dobro = numero * 2
const tercaParte = numero / 3

console.log("O dobro de " + numero + " é " + dobro)
console.log("A terça parte de " + numero + " é " + tercaParte.toFixed(5)) // toFixed(3) = arredondamento de 3 casas decimais