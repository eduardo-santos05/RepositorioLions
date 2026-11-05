import mongoose from '../conexao.js'
import Time from './Time.js'

let times = await Time.find()
let posicao = null

for (let i = 0; i < times.length; i++) {
    if (times[i].nome === 'Águias') {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Time não encontrado")
} else {
    let id = times[posicao]._id
    let removido = await Time.findByIdAndDelete(id)
    console.log(`Time desclassificado: ${removido.nome}`)
}

await mongoose.disconnect()