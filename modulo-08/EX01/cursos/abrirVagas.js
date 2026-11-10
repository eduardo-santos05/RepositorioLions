import mongoose from '../../conexao.js'
import Curso from './Curso.js'

let cursos = await Curso.find()

let posicao = posicaoNodeJs

if (posicao >= cursos.length) {
    console.log("Não existe curso cadastrado na posição informada")
} else {
    let id = cursos[posicao]._id
    await Curso.findByIdAndUpdate(id, {vagas: 35})
    console.log(`${cursos[posicao].nome}: agora com ${cursos[posicao].vagas} vagas.`)
}

await mongoose.disconnect()