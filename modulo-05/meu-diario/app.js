import salvarAnotacao from "./salvarAnotacao.js";
import lerDiario from "./lerDiario.js";

let texto1 = "Hoje aprendi o que é um módulo."
let texto2 = "Usei export default e import pela primeira vez."
salvarAnotacao(texto1)
salvarAnotacao(texto2)

console.log("=== Meu diário ===")
console.log(lerDiario())