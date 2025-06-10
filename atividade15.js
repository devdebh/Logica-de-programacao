const readline = require("readline-sync")

let diasTrabalhados = readline.questionFloat("Digite quantos dias o funcionário trabalhou: ")
let salario = diasTrabalhados * 8 * 25

console.log("O salário desse mês será igual a R$" + salario.toFixed(2))