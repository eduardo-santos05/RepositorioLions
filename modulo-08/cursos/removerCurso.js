import mongoose from '../conexao.js'
import Curso from './Curso.js'

let cursos = await Curso.find()

let posicao = null

for (let i = 0; i < cursos.length; i++) {
    if (cursos[i].nome === "JavaScript") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Curso não encontrado")
} else {
    let id = cursos[posicao]._id
    let removido = await Curso.findByIdAndDelete(id)
    console.log("Curso removido:", removido.nome + ` (${removido.vagas} vagas)`)
}

await mongoose.disconnect()