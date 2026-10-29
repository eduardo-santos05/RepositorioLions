export default function listarLivros(livros) {
    if (livros.length === 0) {
        console.log('Nenhum livro cadastrado.')
        return
    } else {
        livros.forEach(livro => {
            console.log(`\nID: ${livro.id}`)
            console.log(`Título: ${livro.titulo}`)
            console.log(`Autor: ${livro.autor}`)
            console.log(`Ano: ${livro.ano}`)
        });
    }
}