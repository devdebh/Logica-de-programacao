const readline = require("readline-sync");
let numero1 = readline.questionInt("Digite o primeiro número: "); // Usa questionInt para garantir que o usuário digite um número inteiro
let numero2 = readline.questionInt("Digite o segundo número: ");
const soma = numero1 + numero2; // Soma os números

console.log("A soma dos números " + numero1 + " e " + numero2 + " é igual a  " + soma + ".")