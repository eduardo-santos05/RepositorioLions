function adicionarLivro(livros, novoLivro) {
    // Validação: o título não pode repetir
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].titulo === novoLivro.titulo) {
            console.log(`Erro: o livro "${novoLivro.titulo}" já está cadastrado!`);
            return false;
        }
    }
    // ID sequencial
    if (livros.length > 0) {
        let ultimoLivro = livros[livros.length - 1];
        novoLivro.id = ultimoLivro.id + 1;
    } else {
        novoLivro.id = 1;
    }

    livros.push(novoLivro);
    return true;
}
export default adicionarLivro;