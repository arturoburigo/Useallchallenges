const Pilha =  () => {
    const data = ['uva', 'abacaxi', 'laranja', 'limao']
    let ultimo_pilha = -1 

    const push = (value) => {
        ultimo_pilha ++
        data[ultimo_pilha] = value
    }

    const pop = () => {
        if (ultimo_pilha < 0) {
            return false
        } else {
            const ultimoitem = data[ultimo_pilha]
            data.splice(ultimo_pilha, 1)
            ultimo_pilha --
            return ultimoitem
        }
    }
    const print = () => {
        console.log(data)
    }

    return {
        push, pop, print
    }
}

const pilha = Pilha ()
pilha.print()
pilha.pop()
pilha.push('pera')
pilha.print()
 
