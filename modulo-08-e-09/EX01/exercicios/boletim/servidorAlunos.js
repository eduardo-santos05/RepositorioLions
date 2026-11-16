import express from 'express'
import mongoose from '../../conexao.js'
import Aluno from './Aluno.js'

const router = express()
const port = 3000

router.use(express.json())

router.get("/alunos/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({ erro: "ID inválido!" })
    }
    
    let aluno = await Aluno.findById(req.params.id)

    if (aluno === null) {
        return res.status(404).send({ erro: "Aluno não encontrado" })
    }

    let nome = aluno.nome
    let media = (aluno.nota1 + aluno.nota2)/2

    res.send({ nome, media })
})

router.post("/alunos", async (req, res) => {
    let erro = new Aluno(req.body).validateSync()

    if (erro) {
        return res.status(400).send({ erro: erro.message })
    }

    let aluno = await Aluno.create(req.body)
    res.status(201).send(aluno)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})