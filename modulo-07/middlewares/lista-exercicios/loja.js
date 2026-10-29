import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let acessos = 0

function contarAcessos(req, res, next) {
    acessos += 1
    next()
}

router.use(contarAcessos)

let produtos = [{ id: 1, nome: "Teclado" }]

router.get("/produtos", (req, res) => {
    res.send(produtos)
})

router.get("/acessos", (req, res) => {
    res.send({ acessos: acessos })
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})