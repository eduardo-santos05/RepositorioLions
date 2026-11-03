import mongoose from "mongoose"

let cursoSchema = new mongoose.Schema({
    nome: { type: String },
    cargaHoraria: { type: Number },
    vagas: { type: Number }
})

let Curso = mongoose.model("Curso", cursoSchema)

export default Curso