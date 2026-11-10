import mongoose from "../../conexao.js"
import Produto from "./Produto.js"

let produtos = await Produto.find()

let indice = 3

if (indice >= produtos.length) {
    console.log("Não existe produto nessa posição")
} else {
    let id = produtos[indice]._id
    await Produto.findByIdAndUpdate(id, { preco: 450, estoque: 3 })
    console.log("Produto atualizado:", produtos[indice].nome)
}

await mongoose.disconnect()