const readline = require("readline-sync")

let numero = readline.questionInt("Digite um número: "); // questionInt = escrita de um numero inteiro
let antecessor = numero - 1
let sucessor = numero + 1

console.log("O antecessor de " + numero + " é " + antecessor + ".")
console.log("O sucessor de " + numero + " é " + sucessor + ".") 