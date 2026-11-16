import mongoose from '../../conexao.js'
import Filme from './Filme.js'

let id = "6ae9d9010e09e6a1b2a0ae1d"

let filme = await Filme.findById(id)

if (filme === null) {
    console.log("Filme não encontrado")
} else {
    console.log(`${filme.titulo} (${filme.genero}): ${filme.duracao} min`)    
}

await mongoose.disconnect()