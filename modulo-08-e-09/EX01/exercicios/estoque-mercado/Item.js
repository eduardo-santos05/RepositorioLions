import mongoose from 'mongoose'

let itensSchema = new mongoose.Schema({
    nome: { type: String },
    preco: { type: Number },
    quantidade: { type: Number, default: 1 },
    cadastradoPor: {
        nome: { type: String }
    }
})

let Item = mongoose.model('Item', itensSchema)

export default Item