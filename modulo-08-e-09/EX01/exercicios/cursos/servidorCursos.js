import express from 'express'
import mongoose from '../../../conexao.js'
import Curso from './Curso.js'
import { login } from './login.js'
import { autenticar } from './autenticar.js'

const router = express()
const port = 3000

router.use(express.json())

router.get("/cursos/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({ erro: "ID inválido!" })
    }
    
    let curso = await Curso.findById(req.params.id)

    if (curso === null) {
        return res.status(404).send({ erro: "Curso não encontrado" })
    }

    res.send(curso)
})

router.post("/login", login)

router.post("/cursos", autenticar, async (req, res) => {
    let erro = new Curso(req.body).validateSync()

    if (erro) {
        return res.status(400).send({ erro: erro.message })
    }

    let curso = await Curso.create(req.body)
    res.status(201).send(curso)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})