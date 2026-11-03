import mongoose from "../conexao.js";
import Filme from "./Filme.js";

let filmes = await Filme.find()
console.log("Total de filmes: " + filmes.length)

filmes.forEach((filme) => {
    console.log(`- ${filme.titulo} (${filme.genero}): ${filme.duracao} min`)
})
await mongoose.disconnect();