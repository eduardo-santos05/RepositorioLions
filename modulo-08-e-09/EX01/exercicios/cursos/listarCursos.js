import mongoose from "../../conexao.js"
import Curso from "./Curso.js"

let cursos = await Curso.find()
console.log("Total de cursos: " + cursos.length)

let totalVagas = 0
cursos.forEach((curso) => {
    console.log(`[${cursos.indexOf(curso)}] ${curso._id}`)
    console.log(`- ${curso.nome}: ${curso.cargaHoraria}h, ${curso.vagas} vagas`)
    totalVagas += curso.vagas
})
console.log("Total de vagas: " + totalVagas)

await mongoose.disconnect()