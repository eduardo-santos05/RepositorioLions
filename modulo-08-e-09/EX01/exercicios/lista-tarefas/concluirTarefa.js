import mongoose from '../../conexao.js'
import Tarefa from './Tarefa.js'

let tarefas = await Tarefa.find()

let posicao = 1

if (posicao >= tarefas.length) {
    console.log("Tarefa não encontrada nessa posição")
} else {
    let id = tarefas[posicao]._id
    await Tarefa.findByIdAndUpdate(id, {concluida: true})
    console.log(`Tarefa concluída: ${tarefas[posicao].titulo}.`)
}

await mongoose.disconnect()