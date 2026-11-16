import mongoose from '../../conexao.js'
import Time from './Time.js'

let times = await Time.find()

let posicao = 0

if (posicao >= times.length) {
    console.log("Não existe time cadastrado na posição informada")
} else {
    let time = times[posicao]
    let pontos = time.vitorias * 3 + time.empates
    console.log(`${time.nome}: ${pontos} pontos (${time.vitorias}V ${time.empates}E ${time.derrotas}D)`)
}

await mongoose.disconnect()