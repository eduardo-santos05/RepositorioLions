import express from 'express'

const router = express()
const port = 3000

let pets = []

router.get("/pets", (req, res) => {
    res.send(pets)
})

router.get("/pets/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = pets.findIndex((pet) => pet.id === id)

    res.send(pets[indice])
})

router.post("/pets", (req, res) => {
    let nome = req.body.nome
    let especie = req.body.especie
    let id = 1
    if (pets.length > 0) {
        id = pets[pets.length - 1].id + 1
    }
    let pet = {id: id, nome: nome, especie: especie}
    pets.push(pet)
    res.send(pet)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})