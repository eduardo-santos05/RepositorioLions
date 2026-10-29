export default function listarJogos(jogos) {
    if (jogos.length === 0) {
        console.log('Nenhum jogo cadastrado.')
        return
    } else {
        jogos.forEach((jogo) => console.log(`ID: ${jogo.id} | Nome do jogo: ${jogo.nome} | Gênero: ${jogo.genero} | Código: ${jogo.codigo}`))
    }
}