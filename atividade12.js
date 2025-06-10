const readline = require("readline-sync")

let produto = readline.questionFloat("Digite o preço do produto: ")
let desconto = (produto * 0.05)
let promocao = produto - desconto

console.log("O preço promocional é de R$" + promocao.toFixed(2))
