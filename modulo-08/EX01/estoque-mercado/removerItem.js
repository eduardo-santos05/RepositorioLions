import mongoose from '../../conexao.js'
import Item from "./Item.js"

let itens = await Item.find()

let posicao = indiceFeijao

if (posicao >= itens.length) {
    console.log("Não existe item cadastrado na posição informada")
} else {
    let id = itens[posicao]._id
    let removido = await Item.findByIdAndDelete(id)
    console.log("Removido:", removido.nome + ` (R$ ${removido.preco} saíram do estoque)`)
}

await mongoose.disconnect()