import mongoose from 'mongoose'

let timeSchema = new mongoose.Schema({
    nome: { type: String },
    vitorias: { type: Number },
    empates: { type: Number },
    derrotas: { type: Number }
})

let Time = mongoose.model('Time', timeSchema)

export default Time