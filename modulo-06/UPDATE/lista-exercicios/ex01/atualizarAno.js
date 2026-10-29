function atualizarAno(livros, id, novoAno) {
    const indice = livros.findIndex((livro) => livro.id === id)
    if (indice === -1) {
        console.log('Erro: livro não encontrado')
        return false
    }
    livros[indice].ano = novoAno || livros[indice].ano
    return true
}
export default atualizarAno;