import livros from "./livros.js";
import adicionarLivro from "./adicionarLivro.js";
import listarLivros from "./listarLivros.js";

console.log("--- Teste com uma lista vazia ---");
listarLivros([]);

const novoLivro = { titulo: "Iracema", autor: "José de Alencar", ano: 1865 };
if (adicionarLivro(livros, novoLivro)) {
    console.log(`\n${novoLivro.titulo} cadastrado com o ID ${novoLivro.id}!`);
}

console.log("\n--- Biblioteca ---");
listarLivros(livros);