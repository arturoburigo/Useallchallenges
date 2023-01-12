const Fila = () => {
    const data = ['uva', 'abacaxi', 'laranja', 'limao']

    const add = (value) => {
        data.unshift(value)
    }

    const remove = () => {
        const value = data[data.length-1]   
        data.splice(data.length-1, 1)
        return value
    }

    const print = () => console.log(data)


    return {
        print,
        add,
        remove
    }
}

const fila = Fila()
fila.print()
fila.remove()
fila.add('pera')
fila.print()