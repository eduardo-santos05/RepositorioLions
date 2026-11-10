import mongoose from '../../conexao.js'
import Tarefa from './Tarefa.js'

let tarefas = await Tarefa.find()

let posicao = null
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].titulo === "Fazer a lista") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Tarefa não encontrada")
} else {
    let id = tarefas[posicao]._id
    await Tarefa.findByIdAndUpdate(id, {concluida: true})
    console.log(`Tarefa concluída: ${tarefas[posicao].titulo}.`)
}

await mongoose.disconnect()