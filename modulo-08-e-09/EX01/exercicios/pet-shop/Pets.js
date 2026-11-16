import mongoose from 'mongoose'

let petSchema = new mongoose.Schema({
    nome: { type: String },
    especie: { type: String },
    idade: { type: Number },
})

const Pet = mongoose.model('Pet', petSchema)

export default Pet