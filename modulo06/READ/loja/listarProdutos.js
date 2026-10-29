export default function listarProdutos(produtos) {
    if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado.')
        return
    } else {
        produtos.forEach(produto => console.log(`ID: ${produto.id} | ${produto.nome} | R$ ${produto.preco.toFixed(2)}`))
    }
}