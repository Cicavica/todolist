//contants
const KEYPRESS_ENTER = 13

// state variables
let lastEditedTaskButton = undefined;

//after clicking button "Add" new task is added
const addTaskBtn = document.body.querySelector("#button-addon2");

function addTask() {
    const inputValue = document.body.querySelector("#todo-input").value;
    const element = document.createElement("li");
    element.className = "list-group-item";
    element.innerHTML = `
            <div class="d-flex align-items-center">
                <div class="me-auto">
                    <input class="form-check-input me-2" type="checkbox" value="">
                </div>
                <div class="flex-grow-1 task-name">
                    ${inputValue}
                </div>
                <div><button class="btn btn-outline-primary btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button></div>
                <div class="bd-highlight"><button type="button" class="btn-close btn-sm ms-2"></button>
                </div>
            </div>`
    document.body.querySelector("#todo-tasks").appendChild(element);
    document.body.querySelector("#todo-input").value = "";
    const buttonClose = element.querySelector('.btn-close');
    buttonClose.addEventListener('click', deleteTask, false);
}

//hitting closing button deletes a task
let deleteBtn = document.getElementsByClassName('btn-close');
    
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', deleteTask, false);
}

function deleteTask() {
    this.closest('.list-group-item').remove();
}

//hitting enter creates a new task
const todoInput = document.body.querySelector("#todo-input");

addTaskBtn.addEventListener("click", addTask);
todoInput.addEventListener("keypress", function(e) {
    if (e.keyCode === KEYPRESS_ENTER) {
        addTask()
    }
});

//editing tasks
const editTaskModal = document.getElementById('editTaskModal')
editTaskModal.addEventListener('show.bs.modal', function (event) {
  const eventButton = event.relatedTarget;
  lastEditedTaskButton = eventButton;
  const originalTaskText = lastEditedTaskButton.closest('.list-group-item').getElementsByClassName('task-name')[0].innerText;
  const modalBodyInput = editTaskModal.querySelector('.modal-body textarea');
  modalBodyInput.value = originalTaskText;
});

const saveChangesButton= document.body.querySelector('#saveChangesButton')
saveChangesButton.addEventListener('click', function() {
    const editedTaskText = document.body.querySelector('textarea').value;
    lastEditedTaskButton.closest('.list-group-item').getElementsByClassName('task-name')[0].innerText = editedTaskText;
})