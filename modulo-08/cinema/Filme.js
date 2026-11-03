import mongoose from "mongoose";

let filmeSchema = new mongoose.Schema({
    titulo: { type: String },
    genero: { type: String },
    duracao: { type: Number },
});

let Filme = mongoose.model("Filme", filmeSchema);
export default Filme;