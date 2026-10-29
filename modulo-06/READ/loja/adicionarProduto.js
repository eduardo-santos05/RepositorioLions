export default function adicionarProduto(produtos, novoProduto) {
    if (produtos.length > 0) {
        novoProduto.id = produtos[produtos.length - 1].id + 1
    } else {
        novoProduto.id = 1
    }
    produtos.push(novoProduto)
    return true
}