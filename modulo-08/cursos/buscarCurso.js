import mongoose from "../conexao.js"
import Curso from "./Curso.js"

let cursos = await Curso.find()
let posicao = null

for (let i = 0; i < cursos.length; i++) {
    if (cursos[i].nome === "MongoDB") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Curso não encontrado")
} else {
    console.log(`${cursos[posicao].nome}: ${cursos[posicao].cargaHoraria}h, ${cursos[posicao].vagas} vagas`)
}

await mongoose.disconnect()