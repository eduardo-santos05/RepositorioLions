import mongoose from '../conexao.js'
import Item from "./Item.js"

let itens = await Item.find()

let posicao = null
for (let i = 0; i < itens.length; i++) {
    if (itens[i].nome === 'Feijão') {
        posicao = i
    }
}

if (posicao === null) {
    console.log("Item não encontrado")
} else {
    let id = itens[posicao]._id
    let removido = await Item.findByIdAndDelete(id)
    console.log("Removido:", removido.nome + ` (R$ ${removido.preco} saíram do estoque)`)
}

await mongoose.disconnect()