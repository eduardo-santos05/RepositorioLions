import mongoose from '../../conexao.js'
import Filme from './Filme.js'

let id = "6ae9d9010e09e6a1b2a0ae1c"

let removido = await Filme.findByIdAndDelete(id)

if (removido === null) {
    console.log("Filme não encontrado")
} else {
    console.log("Filme removido:", removido.titulo) 
}

await mongoose.disconnect()