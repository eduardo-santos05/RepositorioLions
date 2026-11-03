import mongoose from '../conexao.js';
import Aluno from './Aluno.js';

let alunos = await Aluno.find();

let aluno, media, status
let aprovados = 0

for (let i = 0; i < alunos.length; i++) {
    aluno = alunos[i];
    media = (alunos[i].nota1 + alunos[i].nota2) / 2;
    if (media >= 7) {
        status = "Aprovado";
        aprovados++;
    } else {
        status = "Reprovado";
    }
    console.log(`- ${aluno.nome}: média ${media} (${status})`);
}
console.log(`Aprovados: ${aprovados} de ${alunos.length}`);

await mongoose.disconnect();