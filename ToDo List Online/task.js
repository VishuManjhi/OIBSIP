function addTask() {
    const titleInput = document.getElementById('task-title');
    const descInput = document.getElementById('task-desc');

    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (title === '' || description === '') {
        alert("Please fill out both fields.");
        return;
    }

    const taskItem = document.createElement('li');
    const dateAdded = new Date().toLocaleString();

    taskItem.innerHTML = `
        <div class="task-details">
            <div class="title">${title}</div>
            <div class="description">${description}</div>
            <div class="time">Added: ${dateAdded}</div>
        </div>
        <button id="get" onclick="markComplete(this)">Completed</button>
        <button onclick="deleteTask(this)">X</button>
    `;

    document.getElementById('pending-tasks').appendChild(taskItem);

    titleInput.value = '';
    descInput.value = '';
}

function markComplete(button) {
    const taskItem = button.parentElement;
    const dateCompleted = new Date().toLocaleString();

    taskItem.querySelector('.time').textContent = `Completed: ${dateCompleted}`;
    
    button.remove();

    document.getElementById('completed-tasks').appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
