import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let usuarios = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Bruno' }
]

function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog)

router.get("/usuarios", (req, res) => {
    res.send(usuarios)
})

function somenteAdmin(req, res, next) {
    if(req.headers.perfil !== 'admin') {
        return res.status(403).send({ erro: "Somente administradores" })
    }
    next()
}

router.delete("/usuarios/:id", somenteAdmin, (req, res) => {
    let id = Number(req.params.id)
    let indice = usuarios.findIndex((usuario) => usuario.id === id)
    if (indice === -1) {
        return res.status(404).send({ erro: "Usuário não encontrado" })
    }
    usuarios.splice(indice, 1)
    res.send({ mensagem: 'Usuário removido' })
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})