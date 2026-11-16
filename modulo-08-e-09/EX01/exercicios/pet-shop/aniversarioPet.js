import mongoose from '../../conexao.js'
import Pets from './Pets.js'

let posicao = 0

let pets = await Pets.find()

if (posicao >= pets.length) {
    console.log("Não existe pet cadastrado na posição informada")
} else {
    let id = pets[posicao]._id
    let novaIdade = 4
    await Pets.findByIdAndUpdate(id, {idade: novaIdade})
    console.log(`Feliz aniversário, Rex! Agora com ${novaIdade} anos.`)
}

await mongoose.disconnect()