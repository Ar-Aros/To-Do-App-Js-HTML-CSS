// Select elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array
let todos = [];

// Handle form
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    addTodo(todoText);
    todoInput.value = ''; // Clear input
  }
});

// add new todo
function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text: text,
  };
  todos.push(newTodo);
  renderTodos();
}

// Delete a todo
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

// Update todo
function updateTodo(id) {
  const todo = todos.find(t => t.id === id);
  const newText = prompt('Update your todo:', todo.text);
  if (newText !== null && newText.trim() !== '') {
    todo.text = newText.trim();
    renderTodos();
  }
}

// Render todos 
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button class="btn btn-sm btn-secondary me-1" onclick="updateTodo(${todo.id})">Update</button>
        <button class="btn btn-sm btn-danger" onclick="deleteTodo(${todo.id})">Delete</button>
      </div>
    `;

    todoList.appendChild(li);
  });
}
