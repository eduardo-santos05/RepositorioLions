import mongoose from 'mongoose'

let alunoSchema = new mongoose.Schema({
    nome: { type: String },
    nota1: { type: Number, min: [0, "Aluno validation failed: nota1: A nota1 deve ser de 0"], max: [10, "Aluno validation failed: nota1: A nota1 deve ser de 0"] },
    nota2: { type: Number, min: [0, "Aluno validation failed: nota2: A nota2 deve ser de 0"], max: [10, "Aluno validation failed: nota2: A nota2 deve ser de 0"] }
})

let Aluno = mongoose.model('Aluno', alunoSchema)

export default Aluno