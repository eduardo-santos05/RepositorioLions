function atualizarAluno(alunos, id, novosDados) {
    const indice = alunos.findIndex((aluno) => aluno.id === id)
    
    if (indice === -1) {
        console.log("Erro: Aluno não encontrado!")
        return false
    }

    alunos[indice].nome = novosDados.nome || alunos[indice].nome
    alunos[indice].curso = novosDados.curso || alunos[indice].curso
    alunos[indice].turno = novosDados.turno || alunos[indice].turno

    return true
}
export default atualizarAluno;