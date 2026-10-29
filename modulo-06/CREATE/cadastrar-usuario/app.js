import cadastrarUsuario from './cadastrarUsuario.js'

let usuarios = []

cadastrarUsuario(usuarios, {nome: "Ana", email: "ana@gmail.com"})
cadastrarUsuario(usuarios, {nome: "Bruno", email: "bruno@gmail.com"})
cadastrarUsuario(usuarios, {nome: "Ana Paula", email: "ana@gmail.com"})

console.log(`Total de usuários cadastrados: ${usuarios.length}`)

console.log(usuarios)