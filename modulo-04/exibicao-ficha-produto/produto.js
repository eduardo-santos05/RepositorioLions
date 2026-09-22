let produto = {
    nome: 'Teclado mecânico',
    preco: 249.9,
    estoque: 8
}

function exibirFicha(produto) {
    console.log(`Nome: ${produto.nome}`)
    console.log(`Preço: R$ ${produto.preco}`)
    console.log(`Estoque: ${produto.estoque}`)
}

exibirFicha(produto)