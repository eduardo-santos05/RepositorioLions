import mongoose from "../../conexao.js";
import Livro from "./Livro.js";

let id = "6af3052a8bd9bf9e5752a34a"

let livro = await Livro.findById(id)

if (livro === null) {
    console.log("Livro não encontrado")
} else {
    console.log("Título:", livro.titulo)
    console.log("Autor:", livro.autor)
    console.log("Ano:", livro.ano)
}

await mongoose.disconnect();