
import jwt from 'jsonwebtoken'

export function autenticar(req, res, next) {
    let authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).send({ erro: "Token não recebido" })
    }

    let partes = authHeader.split(" ")
    if (partes[0] !== "Bearer" || !partes[1]) {
        return res.status(401).send({ erro: "Padrão de acesso inválido" })
    }

    try {
        let dadosToken = jwt.verify(partes[1], process.env.JWT) // partes[1] é o token
        req.usuario = { email: dadosToken.email, nome: dadosToken.nome }
        next()
    } catch (erro) {
        res.status(401).send({ erro: erro.message })
    }
}