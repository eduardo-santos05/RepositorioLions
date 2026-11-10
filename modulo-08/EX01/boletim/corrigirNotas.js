import mongoose from '../../conexao.js'
import Aluno from './Aluno.js'

let alunos = await Aluno.find()

let posicao = 2

if (posicao >= alunos.length) {
    console.log("Não existe aluno cadastrado na posição informada")
} else {
    let aluno = alunos[posicao]
    let id = aluno._id
    let novaNota1 = 8
    let novaNota2 = 9
    await Aluno.findByIdAndUpdate(id, {nota1: novaNota1, nota2: novaNota2})
    console.log(`${aluno.nome}: notas corrigidas para ${aluno.nota1} e ${aluno.nota2}`)
}

await mongoose.disconnect()