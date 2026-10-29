import usuarios from "./usuarios.js";
import listarUsuarios from "./listarUsuarios.js";
import atualizarUsuario from "./atualizarUsuario.js";
// 1. E-mail que já é de outro usuário
atualizarUsuario(usuarios, 2, { nome: "", email: "ana@email.com" });
// 2. Mantendo o próprio e-mail (deve funcionar)
let atualizou = atualizarUsuario(usuarios, 2, { nome: "Bruno Souza", email: "bruno@email.com" });
if (atualizou === true) {
    console.log("Usuário 2 atualizado!");
}
// 3. E-mail novo e livre
atualizou = atualizarUsuario(usuarios, 3, { nome: "", email: "carla.dev@email.com" });

if (atualizou === true) {
    console.log("Usuário 3 atualizado!");
}
// 4. ID que não existe
atualizarUsuario(usuarios, 7, { nome: "Diego", email: "" });
console.log("--- Usuários ---");
listarUsuarios(usuarios);