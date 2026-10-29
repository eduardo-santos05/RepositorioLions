import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog)

let filmes = [
    {id: 1, titulo: "Carros"},
    {id: 2, titulo: "Toy Story"}
]

router.get("/filmes", (req, res) => {
    res.send(filmes)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})