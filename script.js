//contants
const KEYPRESS_ENTER = 13
const taskList = document.body.querySelector("#todo-tasks");
const addTaskBtn = document.body.querySelector("#buttonAddTask");
const todoInput = document.body.querySelector("#todo-input");

// state variables
let lastEditedTaskButton = undefined;

//after clicking button "Add" new task is added
function addTask() {
    const inputValue = todoInput.value;
    if (inputValue) {
        const task = document.body.querySelector('#exampleTask');
        const newTask = task.cloneNode(true);
        newTask.classList.remove("hidden")
        newTask.querySelector('.task-name').innerText = inputValue
        const buttonClose = newTask.querySelector('.btn-close');
        buttonClose.addEventListener('click', deleteTask, false);
        const checkbox = newTask.querySelector('.form-check-input');
        checkbox.addEventListener('click', taskDone, false);
        taskList.appendChild(newTask);
        todoInput.value = "";
    }
}

//hitting closing button deletes a task
let deleteBtn = document.getElementsByClassName('btn-close');

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', deleteTask, false);
}

function deleteTask(event) {
    event.target.closest('.list-group-item').remove();
}

addTaskBtn.addEventListener("click", addTask);
todoInput.addEventListener("keypress", function (e) {
    if (e.keyCode === KEYPRESS_ENTER) {
        addTask()
    }
});

//checking checkboxes to mark task as done
let checkboxes = document.getElementsByClassName('form-check-input');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', taskDone, false);
}

function taskDone(event) {
    event.target.closest('.list-group-item').classList.toggle("checkedTask");
}

//editing tasks
const editTaskModal = document.getElementById('editTaskModal')
editTaskModal.addEventListener('show.bs.modal', function (event) {
    const eventButton = event.relatedTarget;
    lastEditedTaskButton = eventButton;
    const originalTaskText = lastEditedTaskButton.closest('.list-group-item').getElementsByClassName('task-name')[0].innerText;
    const modalBodyInput = editTaskModal.querySelector('.modal-body textarea');
    modalBodyInput.value = originalTaskText;
});

const saveChangesButton = document.body.querySelector('#saveChangesButton')
saveChangesButton.addEventListener('click', function () {
    const editedTaskText = document.body.querySelector('textarea').value;
    lastEditedTaskButton.closest('.list-group-item').getElementsByClassName('task-name')[0].innerText = editedTaskText;
})
