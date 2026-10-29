function listarUsuarios(usuarios) {
    usuarios.forEach((usuario) => {
        console.log(`${usuario.id} - ${usuario.nome} <${usuario.email}>`);
    });
}
export default listarUsuarios;