import mongoose from 'mongoose'

let tarefasSchema = new mongoose.Schema({
    titulo: { type: String },
    concluida: { type: Boolean }
})

let Tarefa = mongoose.model('Tarefa', tarefasSchema)

export default Tarefa