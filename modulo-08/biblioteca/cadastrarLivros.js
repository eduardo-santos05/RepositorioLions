import mongoose from "../conexao.js";
import Livro from "./Livro.js";

await Livro.create({
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
});

await Livro.create({
    titulo: "Iracema",
    autor: "José de Alencar",
    ano: 1865
})

await Livro.create({
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo",
    ano: 1890
})

console.log("Livros cadastrados!");
await mongoose.disconnect();