import PromptSync from "prompt-sync"
const prompt = PromptSync()

import adicionarPaciente from "./adicionarPaciente.js"
import pacientes from "./pacientes.js"

function exibirMenu() {
    console.log("\n--- Clínica LionsVida ---")
    console.log("1. Cadastrar paciente")
    console.log("2. Ver pacientes")
    console.log("3. Sair")
}   

let opcao
do {
    exibirMenu()
    opcao = prompt("Escolha uma opção: ")
    switch (opcao) {
        case "1":
            let nome = prompt("Digite o nome do paciente: ")
            let email = prompt("Digite o email do paciente: ")
            adicionarPaciente(pacientes, { nome, email })
            break
        case "2":
            if (pacientes.length === 0) {
                console.log("Nenhum paciente cadastrado.")
            } else {
                console.log(pacientes)
            }
            break
        case "3":
            console.log("Saindo do programa...")
            break
        default:
            console.log("Opção inválida!")
            break
    }
} while (opcao !== "3")