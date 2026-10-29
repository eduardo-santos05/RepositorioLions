export default function adicionarInscricao(inscricoes, novaInscricao) {
    if (inscricoes.length > 0) {
        let ultimaInscricao = inscricoes[inscricoes.length - 1]
        novaInscricao.id = ultimaInscricao.id + 1
    } else {
        novaInscricao.id = 1
    }
    for (let i = 0; i < inscricoes.length; i++) {
        if (inscricoes[i].email === novaInscricao.email) {
            console.log(`Erro: O email ${novaInscricao.email} já está inscrito!`)
            return false
        }
    }
    inscricoes.push(novaInscricao)
    console.log(`Inscrição realizada com sucesso!`)
    return true
}