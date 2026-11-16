import mongoose from '../../conexao.js'
import Pets from './Pets.js'

let posicao = 2

let pets = await Pets.find()

if (posicao >= pets.length) {
    console.log("Não existe pet cadastrado na posição informada")
} else {
    let id = pets[posicao]._id
    let pet = await Pets.findById(id)
    console.log(`${pet.nome} é um ${pet.especie} de ${pet.idade} anos`)
}

await mongoose.disconnect()