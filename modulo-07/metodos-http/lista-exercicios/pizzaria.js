import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let pedidos = []

router.get("/pedidos", (req, res) => {
    res.send(pedidos)
})

router.post("/pedidos", (req, res) => {
    let sabor = req.body.sabor

    if(!sabor) {
        return res.status(400).send({ erro: "Informe o sabor" })
    }

    let id = 1
    if (pedidos.length > 0) {
        id = pedidos[pedidos.length - 1].id + 1
    }
    let pizza = {id: id, sabor: sabor}
    pedidos.push(pizza)
    res.status(201).send(pizza)
})

router.delete("/pedidos/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = pedidos.findIndex((pedido) => pedido.id === id)

    if (indice === -1) {
        return res.status(404).send({ erro: "Pedido não encontrado" })
    }

    pedidos.splice(indice, 1)
    res.send({ mensagem: "Pedido cancelado" })
})

router.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})