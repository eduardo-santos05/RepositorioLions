import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let jogos = [
    {
        id: 1,
        nome: 'Minecraft',
        genero: 'Aventura'
    },
    {
        id: 2,
        nome: 'FIFA',
        genero: 'Esporte'
    },
    {
        id: 3,
        nome: 'Tetris',
        genero: 'Puzzle'
    }
]

router.get("/jogos", (req, res) => {
    res.send(jogos)
})

router.get("/jogos/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = jogos.findIndex((jogo) => jogo.id === id)

    if (indice === -1) {
        return res.status(404).send({erro: 'Jogo não encontrado (404)'})
    }
    res.send(jogos[indice])
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})