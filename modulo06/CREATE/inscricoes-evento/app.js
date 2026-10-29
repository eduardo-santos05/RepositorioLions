import PromptSync from 'prompt-sync'
const prompt = PromptSync()

import inscricoes from './inscricoes.js'
import adicionarInscricao from './adicionarInscricao.js'

let nome = prompt('Digite o nome: ')
let email = prompt('Digite o email: ')

adicionarInscricao(inscricoes, {nome, email})

console.log(inscricoes)