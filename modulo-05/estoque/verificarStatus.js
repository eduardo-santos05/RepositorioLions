export default function statusProduto(produto) {
    let status = "Disponível"
    if (produto.quantidade <= 0) {
        status = 'Esgotado'
    }
    console.log(produto.nome + " - " + produto.preco + " - " + status)
}