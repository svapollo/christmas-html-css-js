
document.querySelector("#botão").onclick = function() {
    var tarefa = document.querySelector("#campo").value
  
    var lista = document.querySelector("#lista")

    lista.innerHTML += "<li>"+tarefa+"</li>"
}