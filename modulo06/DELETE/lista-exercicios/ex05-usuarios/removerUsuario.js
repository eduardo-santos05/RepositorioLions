export default function removerUsuario(usuarios, email) {
    const indice = usuarios.findIndex((usuario) => usuario.email === email)

    if (indice === -1) {
        console.log("Erro: Nenhum usuário com esse e-mail!")
        return false
    }

    const usuario = usuarios[indice]

    if (usuario.admin === true) {
        console.log('Erro: Não é possível remover um administrador!')
        return false
    }

    usuarios.splice(indice, 1)
    console.log('Usuário removido!')

    return true
}
