import mongoose from '../../conexao.js'
import Pet from './Pets.js'

await Pet.create({
    nome: "Rex",
    especie: "Cachorro",
    idade: 3
})

await Pet.create({
    nome: "Mimi",
    especie: "Gato",
    idade: 2
})

await Pet.create({
    nome: "Bob",
    especie: "Cachorro",
    idade: 5
})

await mongoose.disconnect()