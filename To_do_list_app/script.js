document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerText = taskText;
            taskItem.addEventListener('click', toggleTask);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    // Function to toggle task completion
    function toggleTask() {
        this.classList.toggle('completed');
    }

    // Event listener for add task button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for pressing enter in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
