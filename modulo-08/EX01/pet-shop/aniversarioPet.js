import mongoose from '../../conexao.js'
import Pets from './Pets.js'

let posicao = null

let pets = await Pets.find()

for (let i = 0; i < pets.length; i++) {
    if (pets[i].nome === "Rex") {
        posicao = i
        break
    }
}

if (posicao === null) {
    console.log("Pet não encontrado")
} else {
    let id = pets[posicao]._id
    let novaIdade = 4
    await Pets.findByIdAndUpdate(id, {idade: novaIdade})
    console.log(`Feliz aniversário, Rex! Agora com ${novaIdade} anos.`)
}

await mongoose.disconnect()