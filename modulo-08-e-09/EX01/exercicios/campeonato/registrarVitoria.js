import mongoose from '../../conexao.js'
import Time from './Time.js'

let times = await Time.find()

let posicao = 1

if (posicao >= times.length) {
    console.log("Não existe time cadastrado na posição informada")
} else {
    let time = times[posicao]
    let id = time._id

    await Time.findByIdAndUpdate(id, {vitorias: 5, derrotas: 1})

    console.log(`${time.nome}: agora com ${time.vitorias}V e ${time.derrotas}D`)
}

await mongoose.disconnect()