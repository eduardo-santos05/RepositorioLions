export default function calcularIdade(anoNascimento) {
    if (anoNascimento > 2026) {
        return "Ano de nascimento inválido para o cálculo da idade em 2026."
    } else {
        return (2026 - anoNascimento)
    }
}