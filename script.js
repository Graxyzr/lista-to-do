let input = document.getElementById("input");
let list = document.getElementById("list");

function addTodo() {
    if (input.value === "") {
        alert("Por favor, adicione uma tarefa.");
    } else {
        let li = document.createElement("li");
        let text = document.createTextNode(input.value);
        let button = document.createElement("button");
        button.innerHTML = "X";
        button.addEventListener("click", function () {
            li.remove();
        });
        li.appendChild(text);
        li.appendChild(button);
        list.appendChild(li);
        input.value = "";
    }
}