import adicionarTarefas from './adicionarTarefa.js'

let tarefas = []

adicionarTarefas(tarefas, {descricao: "Estudar CRUD"})
adicionarTarefas(tarefas, {descricao: "Fazer a lista de exercícios"})
adicionarTarefas(tarefas, {descricao: "Fazer o commit"})

console.log(tarefas)