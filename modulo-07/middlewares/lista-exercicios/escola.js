import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let alunos = []

router.get("/alunos", (req, res) => {
    res.send(alunos)
})

function validarAluno(req, res, next) {
    if (!req.body.nome || !req.body.idade) {
        return res.status(400).send({ erro: "Informe nome e idade" })
    }
    next()
}

router.post("/alunos", validarAluno, (req, res) => {
    let id = 1
    if (alunos.length > 0) {
        id = alunos[alunos.length - 1].id + 1
    }

    let aluno = { id: id, nome: req.body.nome, idade: req.body.idade }
    alunos.push(aluno)

    res.status(201).send(aluno)
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})