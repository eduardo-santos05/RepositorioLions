import PromptSync from "prompt-sync";
const prompt = PromptSync()

import calcularArea from "./calcularArea.js";
import calcularPerimetro from "./calcularPerimetro.js";

let base = Number(prompt('Informe a medida da base do terreno em metros: '))
let altura = Number(prompt('Informe a medida da altura do terreno em metros: '))

let area = calcularArea(base, altura)
let perimetro = calcularPerimetro(base, altura)

console.log(`Área: ${area} m²`)
console.log(`Perímetro: ${perimetro} m`)