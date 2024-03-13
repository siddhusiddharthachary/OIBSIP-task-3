let pendingTasksList = document.getElementById('pendingTasks');
let completedTasksList = document.getElementById('completedTasks');

function addTask() {
    let newTaskInput = document.getElementById('newTask');
    let taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        let taskElement = document.createElement('li');
        let deleteButton = document.createElement('button');
        let completeButton = document.createElement('button');

        taskElement.textContent = taskText;
        deleteButton.textContent = 'Delete';
        completeButton.textContent = 'Complete';

        deleteButton.onclick = function () {
            taskElement.remove();
        };

        completeButton.onclick = function () {
            taskElement.classList.toggle('completed');
            taskElement.removeChild(completeButton);
            completedTasksList.appendChild(taskElement);
        };

        taskElement.appendChild(deleteButton);
        taskElement.appendChild(completeButton);

        pendingTasksList.appendChild(taskElement);
        newTaskInput.value = '';
    }
}
