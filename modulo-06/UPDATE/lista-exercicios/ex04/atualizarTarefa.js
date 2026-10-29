function atualizarTarefa(tarefas, id, novosDados) {
    const indice = tarefas.findIndex((tarefa) => tarefa.id === id)

    if (indice === -1) {
        console.log("Erro: Tarefa não encontrada!")
        return false
    }

    tarefas[indice].titulo = novosDados.titulo || tarefas[indice].titulo
    tarefas[indice].concluida = novosDados.concluida || tarefas[indice].concluida
    tarefas[indice].etiquetas = novosDados.etiquetas || tarefas[indice].etiquetas
    return true
}
export default atualizarTarefa;