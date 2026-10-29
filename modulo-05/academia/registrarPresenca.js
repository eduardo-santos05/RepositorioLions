import fs from "node:fs"

export default function registrarPresenca(nome) {
    fs.appendFileSync("presenca.txt", nome + ", ")
}