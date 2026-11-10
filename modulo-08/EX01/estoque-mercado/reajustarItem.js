import mongoose from '../../conexao.js'
import Item from "./Item.js"

let itens = await Item.find()

let posicao = indiceCafe

if (posicao >= itens.length) {
    console.log("Não existem item cadastrado na posição informada")
} else {
    let item = itens[posicao]
    let id = item._id
    await Item.findByIdAndUpdate(id, {preco: 20, quantidade: 4})
    console.log(`${item.nome} atualizado: ${item.quantidade} x R$ ${item.preco}`)
}

await mongoose.disconnect()