export default function verificarSituacao(media) {
    if (media >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}