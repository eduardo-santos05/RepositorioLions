import calcularMedia from "./calcularMedia.js";
import verificarSituacao from "./verificarSituacao.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync()

let nota1 = Number(prompt("Informe a nota 1: "))
let nota2 = Number(prompt("Informe a nota 2: "))

let media = calcularMedia(nota1, nota2)
let situacao = verificarSituacao(media)

console.log("Média: " + media)
console.log("Situação do aluno: " + situacao)