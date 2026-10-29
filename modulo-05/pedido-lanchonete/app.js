import criarPedido from "./criarPedido.js";
import calcularTotal from "./calcularTotal.js";

let pedido = criarPedido("Hambúrguer", 25.00, 3)
let total = calcularTotal(pedido)

console.log("Pedido: " + pedido.quantidade + "x " + pedido.produto)
console.log("Total: R$ " + total.toFixed(2))