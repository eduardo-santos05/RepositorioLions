export default function listarUsuarios(usuarios) {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.")
        return
    } else {
        usuarios.forEach((usuario) => {
            console.log(`${usuario.id} - ${usuario.nome} (${usuario.email})`)
        })
    }
}