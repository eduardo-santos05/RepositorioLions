import mongoose from '../conexao.js'
import Pet from './Pets.js'

let pets = await Pet.find()
console.log("Total de pets: " + pets.length)

let posicao = 0
pets.forEach((pet) => {
    console.log(`[${posicao++}] ${pet._id}`)
    console.log(` - ${pet.nome} é um ${pet.especie} de ${pet.idade} anos`)
})

await mongoose.disconnect()