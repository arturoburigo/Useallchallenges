const readlineSync = require('readline-sync')
const numeros = [1,2,3,4,5,6,7,8,9,10]
let numero = Number.parseInt(readlineSync.question('Digite um numero Inteiro: '))

function checkNumber (num) {
        let check = numeros.indexOf(num)
        if (check == -1) {
            console.log('O numero %d nao foi encontrado no array :(', num)
            return
    } else {
         console.log('O numero %d existe no array !', num)
         console.log('Esta localizado na casa numero %d do array',check)
            return
    }
}


checkNumber(numero)
