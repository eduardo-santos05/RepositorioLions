import mongoose from '../../conexao.js'
import Aluno from './Aluno.js'

let alunos = await Aluno.find()
let posicao = 1

if (posicao === null) {
    console.log("Aluno não encontrado")
} else {
    let id = alunos[posicao]._id
    let removido = await Aluno.findByIdAndDelete(id)
    console.log("Aluno removido:", removido.nome)
}

await mongoose.disconnect()

