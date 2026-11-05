import mongoose from '../conexao.js'
import Time from './Time.js'

let times = await Time.find()

let posicao = null

for (let i = 0; i < times.length; i++) {
    if (times[i].nome === "Leões") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Time não encontrado")
} else {
    let time = times[posicao]
    let id = time._id
    let pontos = time.vitorias * 3 + time.empates
    console.log(`${time.nome}: ${pontos} pontos (${time.vitorias}V ${time.empates}E ${time.derrotas}D)`)
}

await mongoose.disconnect()