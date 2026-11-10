import mongoose from '../../conexao.js'
import Produto from './Produto.js'

let id = "6aec6847e74bb8503840322e"

let produto = await Produto.findById(id)

if (produto === null) {
    console.log("Produto não encontrado")
} else {
    console.log("Nome:", produto.nome)
    console.log("Categoria:", produto.categoria)
    console.log("Preço:", produto.preco)
    console.log("Estoque:", produto.estoque)
}

await mongoose.disconnect()
