const readline = require("readline-sync");
let nome = readline.question("Nome do funcionario: ");
let salario = readline.questionFloat("Salario: "); // float para permitir decimais

console.log ("Nome do funcionário:" + nome);
console.log ("Salário: " + salario.toFixed(2)); // Formata o salário para 2 casas decimais
console.log("O funcionário (a) " + nome + " terá um sálario R$" + salario + " no mês de Junho.");

