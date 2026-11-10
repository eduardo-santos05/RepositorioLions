import mongoose from '../../conexao.js'
import Livro from './Livro.js'

let id = "6af3052a8bd9bf9e5752a34a"

let livro = await Livro.findById(id)

if (livro === null) {
    console.log("Livro não encontrado")
} else {
    let novoTitulo = 'Iracema: Lenda do Ceará'
    await Livro.findByIdAndUpdate(id, {titulo: novoTitulo})
    console.log(`Livro atualizado: ${novoTitulo}`)
}

await mongoose.disconnect()