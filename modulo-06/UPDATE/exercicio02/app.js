import pets from './pets.js'
import adicionarPet from './adicionarPet.js'
import listarPets from './listarPets.js'
import atualizarPet from './atualizarPet.js'

let novoPet1 = {nome: "Bolt", especie: "Cachorro", idade: 4}
let novoPet2 = {nome: "Garfield", especie: "Gato", idade: 9}

adicionarPet(pets, novoPet1)
adicionarPet(pets, novoPet2)

listarPets(pets)

atualizarPet(pets, 2, {nome: "Mingau", especie: "Gato"})

listarPets(pets)