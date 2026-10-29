export default function adicionarFilme(filmes, novoFilme) {
    if (filmes.length > 0) {
        let ultimoFilme = filmes[filmes.length - 1]
        novoFilme.id = ultimoFilme.id + 1
    } else {
        novoFilme.id = 1
    }
    filmes.push(novoFilme)
    console.log(`${novoFilme.titulo} adicionado com sucesso com ID ${novoFilme.id}!`)
    return true
}