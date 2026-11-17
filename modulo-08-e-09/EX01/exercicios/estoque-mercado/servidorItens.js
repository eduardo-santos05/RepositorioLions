import express from 'express'
import mongoose from '../../../conexao.js'
import Item from './Item.js'
import { autenticar } from './autenticar.js'
import { login } from './login.js'

const router = express()
const port = 3000
router.use(express.json())

router.get("/itens", async (req, res) => {
    let itens = await Item.find()
    res.send(itens)
})

router.post("/login", login)

router.post("/itens", autenticar, async (req, res) => {
    req.body.cadastradoPor = { nome: req.usuario.nome }
    let erro = new Item(req.body).validateSync()

    if (erro) {
        return res.status(400).send({ erro: erro.message })
    }

    let item = await Item.create(req.body)

    res.status(201).send(item)
})

router.delete("/itens/:id", autenticar, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({ erro: "ID inválido!" })
    }

    let item = await Item.findByIdAndDelete(req.params.id)

    if (item === null) {
        return res.status(404).send({ erro: "Item não encontrado" })
    }
    return res.send({ mensagem: "Item removido" })
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})