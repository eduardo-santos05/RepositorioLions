export default function adicionarPaciente(pacientes, novoPaciente) {
    if (pacientes.length > 0) {
        let ultimoPaciente = pacientes[pacientes.length - 1]
        novoPaciente.id = ultimoPaciente.id + 1
    } else {
        novoPaciente.id = 1
    }
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].email === novoPaciente.email) {
            console.log(`Erro: O email ${novoPaciente.email} já está cadastrado!`)
            return false
        }
    }
    pacientes.push(novoPaciente)
    console.log(`Paciente cadastrado com sucesso!`)
    return true
}