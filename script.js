//criando um array 
let tarefas = []

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
        //adicionando a tarefa(valor) no array, através do push
        tarefas.push(tarefa)
        //chamando função "reenderizarTarefas()"
        reenderizarTarefas()
    }

    inputTarefa.value = ""
}

//criando nova função  para reenderizar tarefas
// vamor criar o elemento <li> da nossa lista <ul>
function reenderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

   // let i = 0
    for(i = 0; i < tarefas.length; i++)
    {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }
}