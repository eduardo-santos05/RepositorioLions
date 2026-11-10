import mongoose from '../../conexao.js'
import Item from './Item.js'

let itens = await Item.find()

let posicao = indiceArroz

if (posicao >= itens.length) {
    console.log("Não existe item cadastrado na posição informada")
} else {
    console.log(`${itens[posicao].nome}: ${itens[posicao].quantidade} x R$ ${itens[posicao].preco} = ${itens[posicao].quantidade * itens[posicao].preco}`) 
}

await mongoose.disconnect()