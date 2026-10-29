function aplicarDesconto(preco, percentual) {
    return (preco - preco*percentual/100)
}

export default aplicarDesconto