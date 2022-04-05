let ingredientes = ["harina", "sal", "huevo", "agua", "aceite", "muzzarella", "tomate", "ajo", "aceituna", "morron"]

function prepararPizza(ingredientes) {

    let pares = []
    let impares = []

    for (let c = 0; c < ingredientes.length; c++) {
        if ((ingredientes[c].length % 2) === 0) { pares.push(ingredientes[c]) }
        else { impares.push(ingredientes[c]) }
    }
    return [pares, impares]
}
const [pares, impares] = prepararPizza(ingredientes)
console.log(`Los ingredientes pares son: ${pares.join(", ")} \nLos ingredientes impares son: ${impares.join(", ")}`)

