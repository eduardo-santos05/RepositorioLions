export default function adicionarLivro(livros, novoLivro) {
    livros.push(novoLivro)
    console.log(`${novoLivro.titulo} adicionado com sucesso!`)
    return true
}