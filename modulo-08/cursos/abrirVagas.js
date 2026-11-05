import mongoose from '../conexao.js'
import Curso from './Curso.js'

let posicao = null

let cursos = await Curso.find()

for (let i = 0; i < cursos.length; i++) {
    if (cursos[i].nome === "Node.js") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Curso não encontrado")
} else {
    let id = cursos[posicao]._id
    await Curso.findByIdAndUpdate(id, {vagas: 35})
    console.log(`${cursos[posicao].nome}: agora com ${cursos[posicao].vagas} vagas.`)
}

await mongoose.disconnect()