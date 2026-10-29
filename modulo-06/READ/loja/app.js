import adicionarProduto from "./adicionarProduto.js";
import listarProdutos from "./listarProdutos.js";
import produtos from "./produtos.js"

console.log('--- Antes do cadastro ---')
listarProdutos(produtos)

adicionarProduto(produtos, {nome: "Camiseta", preco: 49.90})
adicionarProduto(produtos, {nome: "Boné", preco: 35.00})
adicionarProduto(produtos, {nome: "Mochila", preco: 120.00})
console.log('--- Depois do cadastro ---')
listarProdutos(produtos)