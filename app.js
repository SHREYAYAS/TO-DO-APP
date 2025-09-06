const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Handle form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
        todoInput.focus();
    }
});

// Function to add a new to-do item
function addTodoItem(text) {
    // Create the list item
    const li = document.createElement('li');

    // Create the span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    taskSpan.className = 'task-text';
    
    // --- ADDED THIS PART ---
    // Add event listener to toggle 'completed' state on click
    taskSpan.addEventListener('click', function() {
        taskSpan.classList.toggle('completed');
    });
    // ----------------------

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&times;';
    deleteButton.className = 'delete-btn';

    // Add event listener to remove the list item
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // Assemble the list item
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    
    // Add the new item to the list
    todoList.appendChild(li);
}
