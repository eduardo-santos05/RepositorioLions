import fs from "node:fs"

export default function lerDiario() {
    return fs.readFileSync("diario.txt", "utf8")
}