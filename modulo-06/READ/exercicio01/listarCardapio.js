export default function listarCardapio(cardapio) {
    if (cardapio.length === 0) {
        console.log("O cardápio está vazio.")
        return
    }
    cardapio.forEach((pizza) => console.log(`${pizza.sabor} - R$ ${(pizza.preco).toFixed(2)}`))
}