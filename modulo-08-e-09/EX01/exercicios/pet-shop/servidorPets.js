import express from 'express'
import mongoose from '../../../conexao.js'
import jwt from 'jsonwebtoken'
import Pets from './Pets.js'
import { login } from './login.js'
import { autenticar } from './autenticar.js'

const router = express()
const port = 3000

router.use(express.json())

router.get("/pets", async (req, res) => {
    let pets = await Pets.find()
    res.send(pets)
})

router.post("/pets", autenticar, async (req, res) => {
    let erro = new Pets(req.body).validateSync()

    if (erro) {
        return res.status(400).send({ erro: erro.message })
    }

    let pet = await Pets.create(req.body)

    if (pet.especie.toLowerCase() === "peixe") {
        return res.status(400).send({ erro: "Pet validation failed: especie: Peixe não é uma espécie atendida" })
    }

    res.status(201).send(pet)
})

router.post("/login", login)

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})