export default function cadastrarUsuario(usuarios, novoUsuario) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === novoUsuario.email) {
            console.log('Erro: o email informado já está cadastrado.')
            return false
        }
    }
    if (usuarios.length > 0) {
        novoUsuario.id = usuarios[usuarios.length - 1].id + 1
    } else {
        novoUsuario.id = 1
    }
    usuarios.push(novoUsuario)
    console.log(`Usuário cadastrado com sucesso!`)
    return true
}