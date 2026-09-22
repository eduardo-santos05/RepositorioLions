let pedido = {
    cliente: 'Rafael Lima',
    valor: 250,
    pago: true
}

console.log('Cliente: ' + pedido.cliente)
console.log('Valor do pedido: R$ ' + pedido.valor)

if (pedido.pago) {
    console.log('Status: pagamento confirmado')
} else {
    console.log('Status: aguardando pagamento')
}