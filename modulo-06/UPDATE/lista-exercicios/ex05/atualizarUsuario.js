function atualizarUsuario(usuarios, id, novosDados) {
    const indice = usuarios.findIndex((usuario) => usuario.id === id)

    if (indice === -1) {
        console.log("Erro: Usuário não encontrado!")
        return false
    }

    usuarios.forEach((usuario) => {
        if (usuario.email === novosDados.email) {
            console.log("Erro: Este e-mail já está em uso!")
            return false
        }
    });

    usuarios[indice].email = novosDados.email || usuarios[indice].email
    usuarios[indice].nome = novosDados.nome || usuarios[indice].nome

    return true
}
export default atualizarUsuario