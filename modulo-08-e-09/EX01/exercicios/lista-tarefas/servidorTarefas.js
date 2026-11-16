import express from 'express'
import mongoose from '../../conexao.js'
import Tarefa from './Tarefa.js'

const router = express()
const port = 3000
router.use(express.json())

router.get("/tarefas", async (req, res) => {
    let tarefas = await Tarefa.find()
    res.send(tarefas)
})

router.post("/tarefas", async (req, res) => {
    let erro = new Tarefa(req.body).validateSync()

    if (erro) {
        return res.status(400).send({ erro: erro.message })
    }

    let tarefa = await Tarefa.create(req.body)

    res.status(201).send(tarefa)
})

router.put("/tarefas", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({ erro: "ID inválido!" })
    }

    let tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body)

    if (tarefa === null) {
        return res.status(404).send({ erro: "Tarefa não encontrada" })
    }
    return res.send({ mensagem: "Tarefa atualizada. "})
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})