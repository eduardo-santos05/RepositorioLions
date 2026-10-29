import cadastrarUsuario from "./cadastrarUsuario.js"
import listarUsuarios from "./listarUsuarios.js"
import usuarios from "./usuarios.js"

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nome, email
for (let i = 0; i < 3; i++) {
    console.log(`\nCadastro ${i+1} de 3`)
    nome = prompt('Informe o nome: ')
    email = prompt('Informe o email: ')
    cadastrarUsuario(usuarios, { nome: nome, email: email })
}

console.log("\n--- Usuários cadastrados ---")
listarUsuarios(usuarios)