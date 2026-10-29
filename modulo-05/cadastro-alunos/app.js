import criarAluno from "./criarAluno.js";

let alunos = []

alunos.push(criarAluno("Ana", "JavaScript"))
alunos.push(criarAluno("Pedro", "Python"))

for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i].nome} está na turma de ${alunos[i].turma}`)
}
