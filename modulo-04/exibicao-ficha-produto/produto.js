let produto = {
    nome: 'Teclado mecânico',
    preco: 249.9,
    estoque: 8
}

function exibirFicha(produto) {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Preço: R$ ${produto.preco}`)
    console.log(`Estoque: ${produto.estoque} unidades`)

    let valorTotalEstoque = produto.preco * produto.estoque
    console.log(`Valor total em estoque: R$ ${valorTotalEstoque}`)

    if (produto.estoque <= 5) {
        console.log('Situação do estoque: baixo')
    } else {
        console.log('Situação do estoque: normal')
    }
}

exibirFicha(produto)