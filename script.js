//contants
const KEYPRESS_ENTER = 13

// state variables
let lastEditedTaskButton = undefined;

// modal storage
const modalTask = document.createElement('div');
modalTask.innerHTML =
    `<div class="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editTaskModal">Edit a task</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Task:</label>
                        <textarea class="form-control" id="message-text" style="height: 150px"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        id="saveChangesButton">Save changes</button>
                </div>
            </div>
        </div> 
    </div>`
document.body.querySelector('.container').appendChild(modalTask)

//after clicking button "Add" new task is added
const addTaskBtn = document.body.querySelector("#button-addon2");

function addTask() {
    const inputValue = document.body.querySelector("#todo-input").value;
    if (inputValue) {
        const task = document.body.querySelector('li');
        const newTask = task.cloneNode(true);
        newTask.classList.remove("hidden")
        newTask.querySelector('.task-name').innerText = inputValue
        const buttonClose = newTask.querySelector('.btn-close');
        buttonClose.addEventListener('click', deleteTask, false);
        document.body.querySelector("#todo-tasks").appendChild(newTask);
        document.body.querySelector("#todo-input").value = "";
    }
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

function taskDone() {
    this.closest('.list-group-item').classList.toggle("checkedTask");
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
