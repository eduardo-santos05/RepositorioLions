import mongoose from '../conexao.js';
import Time from './Time.js';

let times = await Time.find()

let pontos = 0
let liderPontos = 0
let lider
for (let i = 0; i < times.length; i++) {
    pontos = times[i].vitorias * 3 + times[i].empates
    console.log(`- ${times[i].nome}: ${pontos} pontos (${times[i].vitorias}V, ${times[i].empates}E, ${times[i].derrotas}D)`)
    if (pontos > liderPontos) {
        lider = times[i].nome
        liderPontos = pontos
    }
}

console.log(`Líder: ${lider} com ${liderPontos} pontos`)

await mongoose.disconnect()