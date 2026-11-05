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
    let id = livros[posicao]._id
    let removido = await Livro.findByIdAndDelete(id)
    console.log("Livro removido:", removido.titulo)
}

await mongoose.disconnect()