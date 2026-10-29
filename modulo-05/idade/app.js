import PromptSync from "prompt-sync";
const prompt = PromptSync();

import calcularIdade from "./calcularIdade.js";
import verificarMaioridade from "./verificarMaioridade.js";

let anoNascimento = Number(prompt("Informe o ano de nascimento: "))
let idade = calcularIdade(anoNascimento)
let situacao = verificarMaioridade(idade)

if (idade >= 0) {
    console.log(`Idade em 2026: ${idade} anos`)
    console.log(`Situação em 2026: ${situacao}`)
} else {
    console.log(idade)
}