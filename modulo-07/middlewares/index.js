import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog)

let itens = [{id: 1, nome: "Arroz", quantidade: 2}]

router.get("/itens", (req, res) => {
    res.status(200).send(itens)
})

// ----- POST ------

function validarItem(req, res, next) {
    if (!req.body.nome || !req.body.quantidade) {
        return res.status(400).send({erro: "Informe nome e quantidade"})
    }
    next()
}

router.post("/itens", validarItem, (req, res) => {
    let id = 1
    if (itens.length > 0) {
        id = itens[itens.length - 1].id + 1
    }
    let item = {id: id, nome: req.body.nome, quantidade: req.body.quantidade}
    itens.push(item)
    res.status(201).send(item)
})

// ------ DELETE --------

function verificarSenha(req, res, next) {
    if (req.headers.senha !== "lions123") {
        return res.status(401).send({ erro: "Autorização negada" })
    }
    next()
}

router.delete("/itens/:id", verificarSenha, (req, res) => {
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)
    if (indice === -1) {
        return res.status(404).send({ erro: "Item não encontrado" })
    }
    itens.splice(indice, 1)
    res.send({mensagem: "Item removido"})
}) 

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})