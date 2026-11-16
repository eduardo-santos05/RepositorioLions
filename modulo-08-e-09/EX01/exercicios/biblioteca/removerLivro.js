import mongoose from '../../conexao.js'
import Livro from './Livro.js'

let id = "6af3052a8bd9bf9e5752a34b"

let removido = await Livro.findByIdAndDelete(id)

if (removido === null) {
    console.log("Livro não encontrado")
} else {
    console.log("Livro removido:", removido.nome)
}

await mongoose.disconnect()