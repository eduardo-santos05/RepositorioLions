import mongoose from '../conexao.js'
import Filme from './Filme.js'

let novoGenero = "Ação"

let id = '6aeb30abb0bebd221a24bc1b'

let filme = await Filme.findByIdAndUpdate(id, {genero: novoGenero})

if (filme === null) {
    console.log("Filme não encontrado")
} else {
    console.log(`${filme.titulo}: gênero atualizado para ${novoGenero}`)
}

await mongoose.disconnect()