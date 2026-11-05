import mongoose from "../conexao.js";
import Filme from "./Filme.js";

let filmes = await Filme.find()
console.log("Total de filmes: " + filmes.length)

let posicao = 0
filmes.forEach((filme) => {
    console.log(`[${posicao++}] ${filme._id}`)
    console.log(` - Título: ${filme.titulo} (${filme.genero}): ${filme.duracao} min`)
})
await mongoose.disconnect();