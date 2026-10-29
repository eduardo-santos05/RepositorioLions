export default function removerAluno(alunos, id) {
    const indice = alunos.findIndex((aluno) => aluno.id === id)
    if (indice === -1) {
        console.log('Erro: Aluno não encontrado!')
        return false
    }
    const nomeAluno = alunos[indice].nome
    alunos.splice(indice, 1)
    console.log(`Aluno ${nomeAluno} removido.`)
    return true
}