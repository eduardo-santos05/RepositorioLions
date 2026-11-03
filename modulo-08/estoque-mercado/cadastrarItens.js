import mongoose from '../conexao.js';
import Item from './Item.js';

let itens = []

let item1 = await Item.create({
    nome: "Arroz",
    quantidade: 25,
    preco: 3
})

let item2 = await Item.create({
    nome: "Feijão",
    preco: 8,
    quantidade: 5
})

let item3 = await Item.create({
    nome: "Café",
    preco: 18,
    quantidade: 2
})

itens.push(item1, item2, item3)

itens.forEach((item) => {
    console.log(`Salvo: ${item.nome} (id: ${item._id}, preço: R$ ${item.preco}, quantidade: ${item.quantidade})`)
})

await mongoose.disconnect()