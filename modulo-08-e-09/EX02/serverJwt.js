import express from 'express'
import mongoose from '../conexao.js'
import Post from './Post.js'
import jwt from 'jsonwebtoken'
import { autenticar } from './autenticar.js'

const router = express()
const port = 3000

router.use(express.json())

router.post("/login", (req, res) => {
    if (!req.body.email || !req.body.senha) {
        return res.status(400).send({ erro: "Email e senha são obrigatórios" })
    }
    let email = req.body.email
    let senha = req.body.senha

    if (email !== process.env.ADMIN_EMAIL || senha !== process.env.ADMIN_SENHA) {
        return res.status(401).send({ erro: "Credenciais inválidas. Acesso não autorizado!" })
    }
    let token = jwt.sign(
        { email: process.env.ADMIN_EMAIL, nome: process.env.ADMIN_NOME },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
    res.send({ token: token })
})

router.get("/posts/:id", async (req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        if (post === null) {
            return res.status(404).send({ erro: "Post não encontrado" })
        }
        res.send(post)
    } catch (e) {
        res.status(400).send({ erro: e.message })
    }
})

router.post("/posts", async (req, res) => {
    try {
        let post = await Post.create(req.body)
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send({ erro: e.message })
    }
})

// --- Configurações ---

router.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})