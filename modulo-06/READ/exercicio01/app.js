import cardapio from './cardapio.js'
import adicionarPizza from './adicionarPizza.js'
import listarCardapio from './listarCardapio.js'

console.log("Quantidade de pizzas no cardápio: " + cardapio.length)

let adicionou = adicionarPizza(cardapio, {sabor: "Margherita", preco: 25})

if (adicionou) {
    console.log("Pizza adicionada com sucesso!")
} else {
    console.log("Não foi possível adicionar a pizza.")
}

listarCardapio(cardapio)