import mongoose from '../../conexao.js'
import Time from './Time.js'

let times = await Time.find()
let posicao = 2

if (posicao >= times.length) {
    console.log("Não existe time cadastrado na posição informada")
} else {
    let id = times[posicao]._id
    let removido = await Time.findByIdAndDelete(id)
    console.log(`Time desclassificado: ${removido.nome}`)
}

await mongoose.disconnect()