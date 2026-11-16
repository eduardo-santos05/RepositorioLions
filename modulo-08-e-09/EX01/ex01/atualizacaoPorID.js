import mongoose from '../../conexao.js'
import Produto from './Produto.js'

let id = "6aec6847e74bb8503840322e"

let produto = await Produto.findByIdAndUpdate(id, { preco: 180, estoque: 12 })

if (produto === null) {
    console.log("Produto não encontrado")
} else {
    console.log("Produto encontrado:", produto.nome)
}

await mongoose.disconnect()