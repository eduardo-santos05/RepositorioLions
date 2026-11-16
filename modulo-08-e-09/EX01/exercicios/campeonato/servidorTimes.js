import express from 'express'
import mongoose from '../../conexao.js'
import Time from './Time.js'

const router = express()
const port = 3000

router.use(express.json())

router.get("/times", async (req, res) => {
    let times = await Time.find()
    res.send(times)
})

router.post("/times", async (req, res) => {
    let erro = new Time(req.body).validateSync()

    if (erro) {
        return res.status(400).send({ erro: erro.message })
    }

    let time = await Time.create(req.body)
    res.status(201).send(time)
})

router.put("/times/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({ erro: "ID inválido!" })
    }

    let time = await Time.findByIdAndUpdate(req.params.id, req.body)

    if (time === null) {
        return res.status(404).send({ erro: "Time não encontrado" })
    }
    return res.send({ mensagem: "Time atualizado." })
})

router.delete("/times/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({ erro: "ID inválido!" })
    }

    let time = await Time.findByIdAndDelete(req.params.id)

    if (time === null) {
        return res.status(404).send({ erro: "Time não encontrado" })
    }
    return res.send({ mensagem: "Time removido." })
})

router.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})