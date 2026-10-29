import PromptSync from 'prompt-sync'

const prompt = PromptSync()

import pets from './pets.js'
import adicionarPet from './adicionarPet.js'
import listarPets from './listarPets.js'
import atualizarPet from './atualizarPet.js'
import removerPet from './removerPet.js'

listarPets(pets)

let id = Number(prompt("Digite o ID do pet que deseja remover: "))
let confirmar = prompt("Você deseja realmente remover? (sim/nao) ")

if (confirmar.toLowerCase() === "sim") {
    removerPet(pets, id)
} else {
    console.log('Remoção cancelada')
}

listarPets(pets)