import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let reservas = [
    {
        id: 1,
        nome: "Ana",
        mesa: 4
    },
    {
        id: 2,
        nome: "Bruno",
        mesa: 7
    },
    {
        id: 3,
        nome: "Carla",
        mesa: 2
    },
]

router.get("/reservas", (req, res) => {
    res.send(reservas)
})

router.delete("/reservas/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = reservas.findIndex((reserva) => reserva.id === id)

    if (indice === -1) {
        res.status(404).send({ erro: "Reserva não encontrada" })
    }
    reservas.splice(indice, 1)
    res.send({ mensagem: "Reserva cancelada" })
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})