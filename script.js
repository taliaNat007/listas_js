//Criando a função que adiciona tarefas na lista.
//Essa função só realiza a adição de tarefas na lista, quando o usuário
//clicar no botão "Adicionar Tarefa" que está na página index.html
function adicionarTarefa() {

    // Aqui a gente está criando a variável "inputTarefa" que vai armazenar
    //os dados do inputTarefa que está no arquivo index. Aqui a gente consegue
    //buscar o input através do comando "document.getElementById", que através
    // do "id" que inserimos logo em seguida entre os parenteses"()"
    // Vale lembrar que aqui ainda não conseguimos buscar o valor que é inserido 
    // dentro desse input 
    let inputTarefa = document.getElementById("inputTarefa")
    // aqui conseguimos pegar o valor, de fato, do que 
    // que fpi inserido dentro do <input>, fizemos isso através do "value", que 
    //que adicionamos logo após de atribuirmos a variável. Esse valor nós armazenamos
    //na variável tarefa. Abaixo.
    let tarefa = inputTarefa.value 
    
    //Criando a variável "mensagem" para mostrar na tela do usuário sempre que 
    // ele adicionar uma nova tarefa
    let mensagem = "Tarefa adicionada com sucesso!";
    //Elemento <p>(parágrafo)
    //Aqui nós chamamos o elemento <p> através do seu ID="mensagem", indicamos que
    //ela irá receber um txto, através do "textContent", e atribuimos o valor da
    //variável mensagem que irá apresentar o seguinte texto na tela do usuário
    //"Tarefa adicionada com sucesso!"
    document.getElementById("mensagem").textContent = mensagem

    //Aqui nós também estamos buscando elementos no html através do 
    // "document.getElementById"
    //Nessa linha estamos buscando o elemento <ul>, por meio do seu id "listatarefas"
    //Nós estamos fazendo essa busca para podermos adicionar os elementos <li></li>
    let listaTarefas = document.getElementById("listaTarefas")
    //Aqui nós crimos a variável "novaTarefa", utilizando o elemento
    //"document.createElement" e logo após estamos indicando que vamos colocar
    //o elemento "li" dentro dessa variável, que é a variável "novaTarefa"
    let novaTarefa = document.createElement("li")
    //Aqui que nós atribuimos o elemento de texto para essa variável.
    //Percebe-se que a variável novaTarefa já recebeu a função do <li> na linha 
    // anterior. Agora nós estamos referenciando ela ao elemento "textContent"
    // o que indica que agora ela irá receber um texto. Logo após essa indicação
    //nós atribuimos a ela a variável "tarefa" que é o campo que está com o conteúdo
    //de texto do input, dessa forma atribuímos a variável "novaTarefa" um valor 
    //de texto que será digitado no input
    novaTarefa.textContent = tarefa

    //Aqui nós estamos pegando o nosso elemento <ul> que foi atribuidp a variável
    //"listaTarefas" e adicionando, através dp "appendClild" , o elemento filho <li>
    // que é a novaTarefa.
    listaTarefas.appendChild(novaTarefa)

    //Aqui nós limpamos o campo de texto.
    //Quando o usuário digitar uma tarefa e clicar no botão, o campo irá limpar
    //automaticamente. Basicamente atribuímos um valor vazio, sem caracter para 
    //limpar o campo de texto
    inputTarefa.value = ""


}