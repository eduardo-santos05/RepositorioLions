import PromptSync from "prompt-sync";
const prompt = PromptSync();
import adicionarReceita from "./adicionarReceita.js";
import listarReceitas from "./listarReceitas.js";
import receitas from "./receitas.js";

let ingredientes = []
let nomeReceita, ingrediente, opcao
nomeReceita = prompt('Informe o nome da receita: ')
do {
    ingrediente = prompt('Ingrediente: ')
    ingredientes.push(ingrediente)
    opcao = prompt('Adicionar outro ingrediente? (sim/nao): ')
    opcao.toLowerCase()
} while (opcao !== 'sim')