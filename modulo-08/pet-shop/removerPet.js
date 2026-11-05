import mongoose from '../conexao.js'
import Pets from './Pets.js'

let pets = await Pets.find()
let posicao = null
for (let i = 0; i < pets.length; i++) {
    if (pets[i].nome === "Mimi") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Pet não encontrado")
} else {
    let id = pets[posicao]._id
    let removido = await Pets.findByIdAndDelete(id)
    console.log("Pet removido:", removido.nome + ` (${removido.especie})`)
}

await mongoose.disconnect()