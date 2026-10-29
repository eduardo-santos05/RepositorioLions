export default function adicionarTarefas(tarefas, novaTarefa) {
    if (tarefas.length > 0) {
        let ultimaTarefa = tarefas[tarefas.length - 1]
        novaTarefa.id = ultimaTarefa.id + 1
    } else {
        novaTarefa.id = 1
    }
    tarefas.push(novaTarefa)
    console.log(`${novaTarefa.descricao} adicionado com sucesso!`)
    return true
}