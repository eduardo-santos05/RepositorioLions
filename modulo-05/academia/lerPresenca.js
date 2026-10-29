import fs from "node:fs"

export default function lerPresenca() {
    return fs.readFileSync("presenca.txt", "utf-8")
}