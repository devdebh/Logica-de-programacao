const readline = require("readline-sync")


let cigarros = readline.questionInt("Quantos cigarros você fuma por dia? ")
let anosFumando = readline.questionInt("A quantos anos você fuma? ")

let tempoDeVidaPerdido = ((anosFumando * 365.25 * 1440) + (cigarros * 10)) / 1440


console.log("O tempo de vida que você perdeu em DIAS é igual a " + tempoDeVidaPerdido.toFixed(2))

//console.log ("Ao longo da vida você já perdeu " + (aQuantoTempoFuma + (tempoDeVidaAperder / 365.25)).toFixed(1) + " em ANOS é de " + tempoDeVidaAperder + " em DIAS.")

// calcular redução do tempo de vida
// 1 cigarro = 10 minutos
// 1 dia = 1440 minutos
// calcular em DIAS o tempo de vida que o fumate irá perder