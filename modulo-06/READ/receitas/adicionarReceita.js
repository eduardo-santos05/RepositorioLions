export default function adicionarReceita(receitas, novaReceita) {
    if (receitas.length > 0) {
        novaReceita.id = receitas[receitas.length-1].id + 1
    } else {
        novaReceita.id = 1
    }
    receitas.push(novaReceita)
    return true
}