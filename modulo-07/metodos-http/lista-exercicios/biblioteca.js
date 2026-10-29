import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let livros = [
    { id: 1, titulo: "Dom Casmurro"}
]

router.get("/livros", (req, res) => {
    res.send(livros)
})

router.post("/livros", (req, res) => {
    let titulo = req.body.titulo

    if (!titulo) {
        return res.status(400).send({ erro: "Informe o título" })
    }

    let id = 1
    if (livros.length > 0) {
        id = livros[livros.length - 1].id + 1
    }

    let livro = { id: id, titulo: titulo }
    livros.push(livro)
    res.status(201).send(livro)
})

router.put("/livros/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = livros.findIndex((item) => item.id === id)

    if (indice === -1) {
        return res.status(404).send({erro: 'Livro não encontrado'})
    }

    livros[indice].titulo = req.body.titulo

    if (!req.body.titulo) {
        return res.status(400).send({erro: "Informe o título"})
    }

    res.send(livros[indice])
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})