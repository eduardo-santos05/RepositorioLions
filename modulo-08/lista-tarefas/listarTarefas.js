import mongoose from '../conexao.js'
import Tarefa from './Tarefa.js'

let tarefas = await Tarefa.find()

let cont = 1
let pendentes = 0
tarefas.forEach((tarefa) => {
    console.log(`${cont++}. [${tarefa.concluida ? "x" : " "}] ${tarefa.titulo}`)
    if (!tarefa.concluida) {
        pendentes++
    }
})

console.log("Pendentes: " + pendentes)

await mongoose.disconnect()