export default function removerTarefa(tarefas, id) {
    const indice = tarefas.findIndex((tarefa) => tarefa.id === id)

    if (indice === -1) {
        console.log('Erro: Tarefa não encontrada!')
        return false
    }

    if (tarefas[indice].concluida === false) {
        console.log('Erro: Termine a tarefa antes de remover!')
        return false
    }

    tarefas.splice(indice, 1)
    console.log('Tarefa removida!')
    return true
}