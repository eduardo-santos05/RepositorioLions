import express from 'express'
import mongoose from '../../conexao.js'
import Pets from './Pets.js'

const router = express()
const port = 3000

router.use(express.json())

router.get("/pets", async (req, res) => {
    let pets = await Pets.find()
    res.send(pets)
})

router.post("/pets", async (req, res) => {
    let erro = new Pets(req.body).validateSync()

    if (erro) {
        return res.status(400).send({ erro: erro.message })
    }

    let pet = await Pets.create(req.body)
    res.status(201).send(pet)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})