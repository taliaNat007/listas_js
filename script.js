function adicionarTarefa() {

    const inputTarefa = document.getElementById("inputTarefa")   
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Digite uma terefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#A34743"  
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"; 
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28A745" 

        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    inputTarefa.value = ""

}