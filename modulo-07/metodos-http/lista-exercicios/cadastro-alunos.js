import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let alunos = []

router.get("/alunos", (req, res) => {
    res.send(alunos)
})

router.post("/alunos", (req, res) => {
    let nome = req.body.nome
    let idade = req.body.idade

    if (!nome || !idade) {
        return res.status(400).send({erro: "Informe nome e idade"})
    }

    let id = 1

    if (alunos.length > 0) {
        id = alunos[alunos.length - 1].id + 1
    }

    let aluno = { id: id, nome: nome, idade: idade }
    alunos.push(aluno)
    res.status(201).send(aluno)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})