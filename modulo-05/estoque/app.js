import criarProduto from './criarProduto.js'
import statusProduto from './verificarStatus.js'

let produto1 = criarProduto('Playstation 5', 3500, 15)
let produto2 = criarProduto('Nintendo Switch 2', 4500, 20)

statusProduto(produto1)
statusProduto(produto2)