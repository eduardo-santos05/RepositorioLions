export default function listarReceitas(receitas) {
    if (receitas.length === 0) {
        console.log('Nenhuma receita cadastrada.')
        return
    } else {
        receitas.forEach((receita) => {
            console.log(`${receita.id} - ${receita.nome}`)
            console.log(`Ingredientes: ${receita.ingredientes}`)
        })
    }
}