export default function removerPet(pets, id) {
    const indice = pets.findIndex((pet) => pet.id === id)
    if (indice === -1) {
        console.log('Erro: pet não registrado')
        return false
    }
    pets.splice(indice, 1)
    return true
}