import Livro from '../biblioteca/Livro.js'
import mongoose from '../conexao.js'
import Aluno from './Aluno.js'

let alunos = await Aluno.find()

let posicao = null
for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].nome === 'Diego') {
        posicao = i
        break
    }   
}

if (posicao === null) {
    console.log("Aluno não encontrado")
} else {
    let id = alunos[posicao]._id
    let nota1 = Number(alunos[posicao].nota1)
    let nota2 = Number(alunos[posicao].nota2)
    console.log(`${alunos[posicao].nome}: notas ${alunos[posicao].nota1} e ${alunos[posicao].nota2}`)
    let media = (nota1+nota2)/2
    let situacao = media >= 7 ? "Aprovado" : "Reprovado"
    console.log(`Média ${media}: ${situacao}`)
}

await mongoose.disconnect()