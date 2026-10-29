import criarFilme from "./criarFilme.js";

let filmes = []

filmes.push(criarFilme("Toy Story", 1995))
filmes.push(criarFilme("Procurando Nemo", 2003))
filmes.push(criarFilme("Divertida Mente", 2015))

for (let i = 0; i < filmes.length; i++) {
    console.log(`${filmes[i].titulo} (${filmes[i].ano})`)
}