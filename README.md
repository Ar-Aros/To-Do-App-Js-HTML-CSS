# To-Do-App-Js-HTML-CSS

This is a simple To Do app made with Html,CSS and Javascript.

# Feautures-----
1. Add a To Do list in the app
2. View The To Do List
3. Update a To Do
4. Delete a To Do

# APP Look:
<img width="1906" height="885" alt="image" src="https://github.com/user-attachments/assets/944ffa44-c223-42e4-80b2-cd7d8fdd1a34" />

# index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Todo App</title>

  <!-- Bootstrap CSS -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />

  <!-- Custom Styles -->
  <style>
    body {
      background-color: #f8f9fa;
    }
    .todo-card {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .form-control:focus {
      box-shadow: none;
      border-color: #0d6efd;
    }
  </style>
</head>
<body>
  <div class="container mt-5">
    <div class="todo-card bg-white">
      <h2 class="mb-4 text-center text-primary">📝 Todo App</h2>

      <!-- Todo Form -->
      <form id="todo-form" class="mb-3">
        <div class="input-group">
          <input
            type="text"
            id="todo-input"
            class="form-control"
            placeholder="Enter your todo"
            required
          />
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </form>

      <!-- Todo List -->
      <ul id="todo-list" class="list-group">
        <!-- Dynamic todos will appear here -->
      </ul>
    </div>
  </div>

  <!-- Script -->
  <script src="script.js"></script>
</body>
</html>

# script.js

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
