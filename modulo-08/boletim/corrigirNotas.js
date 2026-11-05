import mongoose from '../conexao.js'
import Aluno from './Aluno.js'

let alunos = await Aluno.find()

let posicao = null
for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].nome === 'Carla') {
        posicao = i
        break
    }   
}

if (posicao === null) {
    console.log("Aluno não encontrado")
} else {
    let aluno = alunos[posicao]
    let id = aluno._id
    await Aluno.findByIdAndUpdate(id, {nota1: 8, nota2: 9})
    console.log(`${aluno.nome}: notas corrigidas para ${aluno.nota1} e ${aluno.nota2}`)
}

await mongoose.disconnect()