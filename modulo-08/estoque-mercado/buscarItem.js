import mongoose from '../conexao.js'
import Item from './Item.js'

let posicao = null

let itens = await Item.find()

for (let i = 0; i < itens.length; i++) {
    if (itens[i].nome === 'Arroz') {
        posicao = i
    }
}

if (posicao === null) {
    console.log("Item não encontrado")
} else {
    console.log(`${itens[posicao].nome}: ${itens[posicao].quantidade} x R$ ${itens[posicao].preco} = ${itens[posicao].quantidade * itens[posicao].preco}`) 
}

await mongoose.disconnect()