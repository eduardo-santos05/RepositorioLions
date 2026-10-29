import adicionarLivro from './adicionarLivro.js'

let livros = []

console.log(`Livros antes: ${livros.length}.`)
adicionarLivro(livros, {titulo: "Dom Casmurro", autor: "Machado de Assis"})
console.log("Livro adicionado com sucesso!")
console.log(`Livros depois: ${livros.length}`)
console.log(livros)