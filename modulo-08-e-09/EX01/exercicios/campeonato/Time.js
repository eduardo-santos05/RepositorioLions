import mongoose from 'mongoose'

let timeSchema = new mongoose.Schema({
    nome: { type: String },
    vitorias: { type: Number, default: 0 },
    empates: { type: Number, default: 0 },
    derrotas: { type: Number, default: 0 }
})

let Time = mongoose.model('Time', timeSchema)

export default Time