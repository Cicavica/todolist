const addTaskBtn = document.body.querySelector("#button-addon2");

function addTask() {
    const inputValue = document.body.querySelector("#todo-input").value;
    const label = document.createElement("label");
    label.className = "list-group-item";
    label.innerHTML =
        '<div class="d-flex align-items-center"><div class="me-auto"><input class="form-check-input me-2" type="checkbox" value=""></div><div class="flex-grow-1">' + inputValue + '</div><div class=""><button class="btn btn-outline-primary btn-sm ms-2">edit</button></div><div class="bd-highlight"><button type="button" class="btn-close btn-sm ms-2"></button></div></div>';
    document.body.querySelector("#todo-tasks").appendChild(label);
}

addTaskBtn.addEventListener("click", addTask);