import mongoose from "../../conexao.js"
import Curso from "./Curso.js"

let cursos = await Curso.find()

let posicao = posicaoMongoDB

if (posicao >= cursos.length) {
    console.log("Não existe curso cadastrado na posição informada")
} else {
    console.log(`${cursos[posicao].nome}: ${cursos[posicao].cargaHoraria}h, ${cursos[posicao].vagas} vagas`)
}

await mongoose.disconnect()