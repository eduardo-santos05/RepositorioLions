import mongoose from '../../conexao.js'
import Tarefa from './Tarefa.js'

let tarefas = await Tarefa.find()

let posicao = 1

if (posicao >= tarefas.length) {
    console.log("Tarefa não encontrada nessa posição")
} else {
    let id = tarefas[posicao]._id
    let tarefa = await Tarefa.findById(id)
    console.log(`${tarefas[posicao].titulo}: ${tarefas[posicao].concluida ? "concluída" : "pendente"}`)
}

await mongoose.disconnect()