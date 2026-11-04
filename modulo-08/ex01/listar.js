import mongoose from '../conexao.js'
import Produto from './Produto.js'

let produtos = await Produto.find({ categoria: "Periféricos", estoque: 10 })
console.log("Total de produtos: " + produtos.length)

let valorTotal = 0

produtos.forEach((produto) => {
    console.log(`ID: ${produto._id} | ${produto.nome} | R$ ${produto.preco} | Estoque: ${produto.estoque}`)
    valorTotal += produto.preco * produto.estoque
})

console.log("Valor total do estoque: R$ " + valorTotal)

await mongoose.disconnect()
