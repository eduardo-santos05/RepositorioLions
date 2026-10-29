export default function adicionarJogo(jogos, novoJogo) {
    let codigoExiste = false
    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i].codigo === novoJogo.codigo) {
            codigoExiste = true
            break
        }
    }
    if (codigoExiste) {
        console.log(`O código ${novoJogo.codigo} já existe. Não é possível adicionar o jogo.`)
        return false
    }
    if (jogos.length > 0) {
        let ultimoJogo = jogos[jogos.length - 1]
        novoJogo.id = ultimoJogo.id + 1
    } else {
        novoJogo.id = 1
    }

    jogos.push(novoJogo)
    console.log(`Jogo ${novoJogo.nome} adicionado com sucesso!`)
    return true
}