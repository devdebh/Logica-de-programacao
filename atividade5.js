const readline = require("readline-sync")
let nota1 = readline.questionFloat("Nota 1: ");
let nota2 = readline.questionFloat("Nota 2:"); // quetionFloat = permite números com vírgula
let media = (nota1 + nota2) / 2;

console.log("Nota 1: " + nota1)
console.log("Nota 2: " + nota2)
console.log("A média entre " + nota1 + " e " + nota2 + " é igual a " + media.toFixed(1) + ".");