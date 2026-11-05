import mongoose from '../conexao.js'
import Tarefa from './Tarefa.js'

let tarefas = await Tarefa.find()

let posicao = 0
let pendentes = 0
tarefas.forEach((tarefa) => {
    console.log(`[${posicao++}] ${tarefa._id}`)
    console.log(`   [${tarefa.concluida ? "x" : " "}] ${tarefa.titulo}`)
    if (!tarefa.concluida) {
        pendentes++
    }
})

console.log("Pendentes: " + pendentes)

await mongoose.disconnect()