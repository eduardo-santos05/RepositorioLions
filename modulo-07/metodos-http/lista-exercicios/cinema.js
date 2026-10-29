import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let filmes = []

router.get("/filmes", (req, res) => {
    res.send(filmes)
})

router.get("/filmes/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = filmes.findIndex((filme) => filme.id === id)

    if (indice === -1) {
        return res.status(404).send({erro: "Filme não encontrado"})
    }

    res.send(filmes[indice])
})

router.post("/filmes", (req, res) => {
    let titulo = req.body.titulo
    let duracao = req.body.duracao

    if (!titulo || !duracao) {
        return res.status(400).send({ erro: "Informa título e duração" })
    }

    let id = 1

    if (filmes.length > 0) {
        id = filmes[filmes.length - 1].id + 1
    }

    let filme = {id: id, titulo: titulo, duracao: duracao}
    filmes.push(filme)
    
    res.status(201).send(filme)
})

router.delete("/filmes/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = filmes.findIndex((filme) => filme.id === id)

    if (indice === -1) {
        return res.status(404).send({erro: "Filme não encontrado"})
    }

    filmes.splice(indice, 1)

    res.send({ mensagem: "Filme removido" })
})

router.listen(port, () => {
    console.log(`Cinema rodando na porta ${port}`)
})