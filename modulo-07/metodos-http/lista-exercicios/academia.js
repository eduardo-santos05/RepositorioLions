import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let alunos = [
    { id: 1, nome: "Ana", plano: "Mensal" }
]

router.get("/alunos", (req, res) => {
    res.send(alunos)
})

router.post("/alunos", (req, res) => {
    let nome = req.body.nome
    let plano = req.body.plano

    if (!nome || !plano) {
        return res.status(400).send({ erro: "Informe nome e plano" })
    }

    let id = 1

    if (alunos.length > 0) {
        id = alunos[alunos.length -1].id + 1
    }

    let aluno = { id: id, nome: nome, plano: plano }
    alunos.push(aluno)

    res.status(201).send(aluno)
})

router.put("/alunos/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = alunos.findIndex((aluno) => aluno.id === id)

    if (indice === -1) {
        return res.status(404).send({erro: "Aluno não encontrado" })
    }

    let plano = req.body.plano

    if(!plano) {
        return res.status(400).send({ erro: "Informe o plano" })
    }

    alunos[indice].plano = plano

    res.send(alunos[indice])
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})