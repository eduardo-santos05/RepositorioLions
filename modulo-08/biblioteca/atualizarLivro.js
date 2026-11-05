import mongoose from '../conexao.js'
import Livro from './Livro.js'

let posicao = null

let livros = await Livro.find()

for (let i = 0; i < livros.length; i++) {
    if (livros[i].titulo === "Iracema") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Livro não encontrado")
} else {
    let novoTitulo = 'Iracema: Lenda do Ceará'
    let livro = livros[posicao]
    let id = livro._id
    await Livro.findByIdAndUpdate(id, {titulo: novoTitulo})
    console.log(`Livro atualizado: ${novoTitulo}`)
}

await mongoose.disconnect()