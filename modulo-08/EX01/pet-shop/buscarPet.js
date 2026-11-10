import mongoose from '../../conexao.js'
import Pets from './Pets.js'

let posicao = null

let pets = await Pets.find()

for (let i = 0; i < pets.length; i++) {
    if (pets[i].nome === "Bob") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Pet não encontrado")
} else {
    let id = pets[posicao]._id
    let pet = await Pets.findById(id)
    console.log(`${pet.nome} é um ${pet.especie} de ${pet.idade} anos`)
}

await mongoose.disconnect()