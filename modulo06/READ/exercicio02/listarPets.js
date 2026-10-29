export default function listarPets(pets) {
    if (pets.length === 0) {
        console.log('Nenhum pet cadastrado.')
        return
    }
    pets.forEach((pet) => console.log(`ID: ${pet.id} | Nome: ${pet.nome} | Espécie: ${pet.especie}`))
}