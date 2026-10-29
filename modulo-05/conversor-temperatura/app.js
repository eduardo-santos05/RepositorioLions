import PromptSync from "prompt-sync";
const prompt = PromptSync();

import paraFahrenheit from "./paraFahrenheit.js";
import paraKelvin from "./paraKelvin.js";

let tempCelsius = Number(prompt('Informe a temperatura em Celsius: '))
let tempEmFahrenheit = paraFahrenheit(tempCelsius)
let tempEmKelvin = paraKelvin(tempCelsius)

console.log("Em Fahrenheit: " + tempEmFahrenheit)
console.log("Em Kelvin: " + tempEmKelvin)