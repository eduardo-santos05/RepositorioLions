import mongoose from '../../conexao.js'
import Curso from './Curso.js'

let cursos = await Curso.find()

let posicao = indiceJavaScript

if (posicao >= cursos.length) {
    console.log("Não existe curso cadastrado na posição informada")
} else {
    let id = cursos[posicao]._id
    let removido = await Curso.findByIdAndDelete(id)
    console.log("Curso removido:", removido.nome + ` (${removido.vagas} vagas)`)
}

await mongoose.disconnect()