const addTaskBtn = document.body.querySelector("#button-addon2");

function addTask() {
    const inputValue = document.body.querySelector("#todo-input").value;
    const newItem = document.createElement("div");
    newItem.innerText = inputValue;
    newItem.className = "flex-grow-1";
    const label = document.createElement("label");
    label.className = "list-group-item";
    const div1 = document.createElement("div");
    div1.className = "d-flex align-items-center";
    const div2 = document.createElement("div");
    div2.className = "me-auto";
    const checkbox = document.createElement("input");
    checkbox.className = "form-check-input me-2";
    checkbox.type = "checkbox";
    const div3 = document.createElement("div");
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-primary btn-sm ms-2";
    editBtn.innerText = "edit";
    const div4 = document.createElement("div")
    div4.className = "bd-highlight";
    const closeBtn = document.createElement("button");
    closeBtn.className = "btn-close btn-sm ms-2";
    document.body.querySelector("#todo-tasks").appendChild(label);
    label.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(checkbox);
    div1.appendChild(newItem);
    div1.appendChild(div3);
    div3.appendChild(editBtn);
    div1.appendChild(div4);
    div4.appendChild(closeBtn);
}

addTaskBtn.addEventListener("click", addTask);