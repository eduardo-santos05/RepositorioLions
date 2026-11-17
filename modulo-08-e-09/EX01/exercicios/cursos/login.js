import jwt from 'jsonwebtoken'
export function login(req, res) {
    if (!req.body.email || !req.body.senha) {
        return res.status(400).send({ erro: "Email e senha são obrigatórios" })
    }
    let email = req.body.email
    let senha = req.body.senha

    if (email !== process.env.ADMIN_EMAIL || senha !== process.env.ADMIN_SENHA) {
        return res.status(401).send({ erro: "Email ou senha inválidos!" })
    }
    let token = jwt.sign(
        { email: process.env.ADMIN_EMAIL, nome: process.env.ADMIN_NOME },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
    res.send({ token: token })
}