const readline = require("readline-sync")

let salario = readline.questionFloat("Digite o salário do funcionário: ")
let aumento = salario + (salario * 0.15)

console.log("O novo salário do funcionário, já com o aumento, é de R$" + aumento.toFixed(2))
