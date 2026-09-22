let assinatura = {
    cliente: 'Beatriz Nunes',
    plano: 'Premium',
    mesesAtivos: 14
}

console.log("Cliente: " + assinatura.cliente)
console.log("Plano: " + assinatura.plano)
console.log("Meses ativos: " + assinatura.mesesAtivos)

if (assinatura.mesesAtivos < 6) {
    console.log("Classificação: cliente novo")
} else if (assinatura.mesesAtivos < 24) {
    console.log("Classificação: cliente fiel")
} else {
    console.log("Classificação: cliente veterano")
}