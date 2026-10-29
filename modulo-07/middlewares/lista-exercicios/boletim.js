import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let notas = [
    {id: 1, aluno: "Ana", nota: 9},
    {id: 2, aluno: "Bruno", nota: 7}
]

router.get("/notas", (req, res) => {
    res.send(notas)
})

function verificarSenha(req, res, next) {
    if (req.headers.senha !== 'professor') {
        return res.status(401).send({ erro: 'Acesso não autorizado' })
    }
    next()
}

router.delete("/notas/:id", verificarSenha, (req, res) => {
    let id = Number(req.params.id)
    let indice = notas.findIndex((nota) => nota.id === id)
    if (indice === -1) {
        return res.status(404).send({ erro: "Nota não encontrada" })
    }
    notas.splice(indice, 1)
    res.send({ mensagem: "Nota removida" })
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})