import mongoose from '../conexao.js';
import Item from './Item.js';

let itens = await Item.find()

let valorTotal = 0
itens.forEach((item) => {
    console.log(`- ${item.nome}: ${item.quantidade} x R$ ${item.preco} = R$ ${item.quantidade * item.preco}`)
    valorTotal += item.quantidade * item.preco
})

console.log("Valor total do estoque: R$ " + valorTotal)

await mongoose.disconnect()