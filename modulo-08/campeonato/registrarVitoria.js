import mongoose from '../conexao.js'
import Time from './Time.js'

let times = await Time.find()

let posicao = null

for (let i = 0; i < times.length; i++) {
    if (times[i].nome === "Tigres") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Time não encontrado")
} else {
    let time = times[posicao]
    let id = time._id

    await Time.findByIdAndUpdate(id, {vitorias: 5, derrotas: 1})

    console.log(`${time.nome}: agora com ${time.vitorias}V e ${time.derrotas}D`)
}

await mongoose.disconnect()