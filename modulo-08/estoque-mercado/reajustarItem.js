import mongoose from '../conexao.js'
import Item from "./Item.js"

let posicao = null

let itens = await Item.find()

for (let i = 0; i < itens.length; i++) {
    if (itens[i].nome === 'Café') {
        posicao = i
    }
}

if (posicao === null) {
    console.log("Item não encontrado")
} else {
    let item = itens[posicao]
    let id = item._id
    await Item.findByIdAndUpdate(id, {preco: 20, quantidade: 4})
    console.log(`${item.nome} atualizado: ${item.quantidade} x R$ ${item.preco}`)
}

await mongoose.disconnect()