export default function cadastrarUsuario(usuarios, novoUsuario) {
    if (usuarios.length > 0) {
        let ultimoUsuario = usuarios[usuarios.length - 1]
        novoUsuario.id = ultimoUsuario.id + 1
    } else {
        novoUsuario.id = 1
    }
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === novoUsuario.email) {
            console.log(`Erro: O email ${novoUsuario.email} já está cadastrado!`)
            return false
        }
    }
    usuarios.push(novoUsuario)
    console.log(`${novoUsuario.nome} cadastrado(a) com ID ${novoUsuario.id}.`)
    return true
}