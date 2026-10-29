export default function atualizarPet(pets, id, novosDados) {
    const indice = pets.findIndex((pet) => pet.id === id)
    if (indice === -1) {
        console.log('Pet não encontrado na lista')
        return false
    }
    pets[indice].nome = novosDados.nome || pets[indice]
    pets[indice].especie = novosDados.especie || pets[indice]
    return true
}