let readlineSync = require('readline-sync')
let peso = Number.parseFloat(readlineSync.question('Digite seu peso: '))
let altura = Number.parseFloat(readlineSync.question('Digite sua altura (ex: 1.75): '))


function Imc_calculator (x1, x2) {
    let calculo = (x1 / (x2**2) )
    calculo = calculo.toFixed(1)
    console.log(calculo)

    if (calculo <= 18.4) {
        console.log("Abaixo do peso")
        return
    }
    if (calculo >= 18.5 || calculo <= 24.9 ) {
        console.log("Normal")
        return 
    }
    if (calculo >= 25.1 || calculo <= 29.9) {
        console.log("Acima do peso")
        return
    }
    if (calculo > 30 ) {
        console.log('Obeso')
        return
    }
 
}

Imc_calculator(peso,altura)
