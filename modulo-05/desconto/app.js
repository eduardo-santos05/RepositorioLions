import aplicarDesconto from "./aplicarDesconto.js";

let precoProduto = 120

let precoComDesconto = aplicarDesconto(precoProduto, 10)

console.log(`Preço original: R$ ${precoProduto}`)
console.log(`Preço com 10% de desconto: R$ ${precoComDesconto}`)