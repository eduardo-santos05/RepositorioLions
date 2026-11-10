import mongoose from '../../conexao.js'
import Tarefa from './Tarefa.js'

let id = "6aeb39a6add26c1c365fa322"

let tarefa = await Tarefa.findById(id)

if (tarefa !== null && !tarefa.concluida) {
    console.log(`${tarefa.titulo} está pendente: termine antes de remover`)
} else {
    let removida = await Tarefa.findByIdAndDelete(id)
    if (removida === null) {
        console.log("Tarefa não encontrada")
    } else {
        console.log(`Tarefa removida: ${removida.titulo}`)
    }
}

await mongoose.disconnect()