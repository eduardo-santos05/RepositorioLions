import mongoose from '../conexao.js'
import Produto from './Produto.js'

let teclado = await Produto.create({
    nome: "Teclado",
    categoria: "Periféricos",
    preco: 149,
    estoque: 10
})

console.log("Produto salvo: ", teclado)

let mouse = await Produto.create({
    nome: "Mouse",
    categoria: "Periféricos",
    preco: 79,
    estoque: 20
})

console.log("Produto salvo: ", mouse)

let monitor = await Produto.create({
    nome: "Monitor",
    categoria: "Periféricos",
    preco: 899,
    estoque: 75
})

console.log("Produto salvo: ", monitor)

await mongoose.disconnect()