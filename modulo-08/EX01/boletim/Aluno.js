import mongoose from 'mongoose'

let alunoSchema = new mongoose.Schema({
    nome: { type: String },
    nota1: { type: Number },
    nota2: { type: Number }
})

let Aluno = mongoose.model('Aluno', alunoSchema)

export default Aluno