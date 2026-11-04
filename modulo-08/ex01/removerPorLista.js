import mongoose from '../conexao.js'
import Produto from './Produto.js'

let produtos = await Produto.find()

let posicao = 0

if (posicao >= produtos.length) {
    console.log("Produto não encontrado nessa posição")
} else {
    let id = produtos[posicao]._id
    let removido = await Produto.findByIdAndDelete(id)
    console.log("Produto removido:", removido.nome)
}

await mongoose.disconnect()