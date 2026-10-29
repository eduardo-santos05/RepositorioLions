import jogos from './jogos.js'
import adicionarJogo from './adicionarJogo.js'
import listarJogos from './listarJogos.js'

console.log(jogos)

let novoJogo1 = {nome: "The Witcher 3: Wild Hunt", genero: "RPG", codigo: "TW001"}
let novoJogo2 = {nome: "Resident Evil", genero: "Survival Horror", codigo: "RE001"}

adicionarJogo(jogos, novoJogo1)
adicionarJogo(jogos, novoJogo2)

listarJogos(jogos)