const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTask(task.text, task.completed));
}

const saveTask = (text) => {
    let tasks = Array.from(taskList.children).map(li => ({
        text: li.querySelector('span').textContent,
        completed: li.classList.contains('completed')
    }))
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
const createTask = (text, completed = false) => {
        const li = document.createElement('li');
        if (completed) {
            li.classList.add('completed');
        }
        li.innerHTML = `<span>${text}</span>
                        <button class="delete-btn">X</button>`;
        taskList.appendChild(li);
    }

const addTask = () => {

    const taskText = taskInput.value.trim();
    if (!taskText) return;

    createTask(taskText);
    saveTask(taskText);
    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
})

taskList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;

    if (e.target.tagName === 'SPAN') {
        li.classList.toggle('completed');
    } else if (e.target.classList.contains('delete-btn')) {
        li.remove();
    } saveTask();})

loadTasks();