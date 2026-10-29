import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let avaliacoes = []

router.get("/avaliacoes", (req, res) => {
    res.send(avaliacoes)
})

function validarAvaliacao(req, res, next) {
    if (!req.body.restaurante || !(Number(req.body.nota))) {
        return res.status(400).send({ erro: "Informe restaurante e nota" })
    }
    let nota = Number(req.body.nota)
    if (nota < 1 || nota > 5) {
        return res.status(400).send({ erro: "A nota deve ser de 1 a 5" })
    }
    next()
}

router.post("/avaliacoes", validarAvaliacao, (req, res) => {
    let id = 1
    if (avaliacoes.length > 0) {
        id = avaliacoes[avaliacoes.length -1].id + 1
    }
    let avaliacao = { id: id, restaurante: req.body.restaurante, nota: Number(req.body.nota)}
    avaliacoes.push(avaliacao)
    res.status(201).send(avaliacao)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})