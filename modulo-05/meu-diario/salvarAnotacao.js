import fs from "node:fs"

export default function salvarAnotacao(texto) {
    return fs.appendFileSync("diario.txt", texto + "\n", "utf8")
}