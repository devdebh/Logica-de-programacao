const readline = require("readline-sync")

let a = readline.questionInt("Digite o valor de A:" )
let b = readline.questionInt("Digite o valor de B:" )
let c = readline.questionInt("Digite o valor de C:" )
let delta = (b*b) - 4 * a * c

console.log("Os valores de a: " + a + ", b: " + b + " e c: " + c + " representam delta igual a " + delta.toFixed(3))