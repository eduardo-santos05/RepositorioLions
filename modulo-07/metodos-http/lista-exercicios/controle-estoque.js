import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let produtos = [
    {
        id: 1,
        nome: 'Caneta',
        quantidade: 50
    }, 
    {
        id: 2,
        nome: 'Caderno',
        quantidade: 20
    }
]

router.get("/produtos", (req, res) => {
    res.send(produtos)
})

router.get("/produtos/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = produtos.findIndex((produto) => produto.id === id)

    res.send(produtos[indice])
})

router.put("/produtos/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = produtos.findIndex((produto) => produto.id === id)

    if (indice === -1) {
        return res.status(404).send({ erro: "Produto não encontrado" })
    }

    produtos[indice].quantidade = req.body.quantidade

    res.send(produtos[indice])
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})