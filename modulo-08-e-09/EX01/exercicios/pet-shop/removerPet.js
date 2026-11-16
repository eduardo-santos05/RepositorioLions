import mongoose from '../../conexao.js'
import Pets from './Pets.js'

let pets = await Pets.find()
let posicao = 2

if (posicao >= pets.length) {
    console.log("Não existe pet cadastrado na posição informada")
} else {
    let id = pets[posicao]._id
    let removido = await Pets.findByIdAndDelete(id)
    console.log("Pet removido:", removido.nome + ` (${removido.especie})`)
}

await mongoose.disconnect()