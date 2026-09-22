const produto = {
    nome: "Fone de Ouvido",
    preco: 89.9,
    estoque: 15
};

let valorTotal = produto.preco * produto.estoque

console.log("Produto: " + produto.nome);
console.log("Preço: R$ " + produto.preco);
console.log("Estoque: " + produto.estoque + " unidades");
console.log(`Valor total em estoque: R$ ${valorTotal}`)