import mongoose from '../conexao.js'
import Produto from './Produto.js'

let id = "6ae9d3aa1829aa907e7a959d"

let removido = await Produto.findByIdAndDelete(id)

if (removido === null) {
    console.log("Produto não encontrado")
} else {
    console.log("Produto removido:", removido.nome)
}

await mongoose.disconnect()