import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let itens = [{ id: 1, nome: 'Arroz', quantidade: 2 }]

// GET

router.get("/itens", (req, res) => {    // Busca todos os itens
    res.send(itens)
})

router.get("/itens/:id", (req, res) => {    // Busca um item pelo seu id
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)

    if (indice === -1) {
        return res.status(404).send({erro: 'Item não encontrado (404)'})
    }

    res.send(itens[indice])
})


// POST

router.post('/itens', (req, res) => {
    let nome = req.body.nome
    let quantidade = req.body.quantidade

    if (!nome || !quantidade) {
        return res.status(400).send({erro: "Faltaram dados (400)"})
    }

    let id = 1

    if(itens.length > 0) {
        id = itens[itens.length - 1].id + 1
    }

    let item = {id: id, nome: nome, quantidade: quantidade}
    itens.push(item)
    res.status(201).send(item)
})

// PUT

router.put("/itens/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)

    if (indice === -1) {
        return res.status(404).send({erro: 'Item não encontrado (404)'})
    }

    itens[indice].quantidade = req.body.quantidade

    if (!quantidade) {
        return res.status(400).send({erro: "Faltaram dados (400)"})
    }

    res.send(itens[indice])
})


// DELETE

router.delete("/itens/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)
    if (indice === -1) {
        return res.status(404).send({erro: 'Item não encontrado (404)'})
    }
    itens.splice(indice, 1)
    res.send('Item removido.')
})


// router listen

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})