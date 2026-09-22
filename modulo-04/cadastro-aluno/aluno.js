let aluno = {
    nome: 'Camila Rocha',
    idade: 19,
    curso: 'Trilha JavaScript',
    ativo: true
}

console.log(`Nome: ${aluno.nome}`)
console.log(`Idade: ${aluno.idade}`)
console.log(`Curso: ${aluno.curso}`)

if (aluno.ativo) {
    console.log('Situação: aluno(a) ativo')
} else {
    console.log('Situação: aluno(a) inativo')
}