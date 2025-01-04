const apiUrl = 'http://localhost:5000/api/todos';
let currentTodoId = null;

document.addEventListener('DOMContentLoaded', () => {
  const addTodoButton = document.getElementById('addTodoButton');
  const updateTodoButton = document.getElementById('updateTodoButton');
  const cancelEditButton = document.getElementById('cancelEditButton');
  const todoNameInput = document.getElementById('todoName');
  const todoDescriptionInput = document.getElementById('todoDescription');
  const editTodoNameInput = document.getElementById('editTodoName');
  const editTodoDescriptionInput = document.getElementById('editTodoDescription');
  const todosContainer = document.getElementById('todosContainer');
  const addTodoForm = document.getElementById('addTodoForm');
  const editTodoForm = document.getElementById('editTodoForm');

  // Lấy danh sách todos
  const fetchTodos = async () => {
    try {
      const response = await fetch(apiUrl);
      const todos = await response.json();
      renderTodos(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Render todos lên giao diện
  const renderTodos = (todos) => {
    todosContainer.innerHTML = ''; // Clear existing todos
    todos.forEach(todo => {
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo-item');
      todoDiv.innerHTML = `
        <span>${todo.name}</span><br>
        <small>${todo.description}</small><br>
        <button onclick="editTodo('${todo._id}')">Edit</button>
        <button onclick="deleteTodo('${todo._id}')">Delete</button>
      `;
      todosContainer.appendChild(todoDiv);
    });
  };

  // Thêm Todo mới
  addTodoButton.addEventListener('click', async () => {
    const name = todoNameInput.value;
    const description = todoDescriptionInput.value;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
      });
      if (response.ok) {
        fetchTodos(); // Reload todos after adding
      } else {
        alert('Failed to add todo');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }

    todoNameInput.value = '';
    todoDescriptionInput.value = '';
  });

  // Chỉnh sửa Todo
  window.editTodo = (id) => {
    fetch(`${apiUrl}/${id}/edit`)
      .then(response => response.json())
      .then(todo => {
        currentTodoId = todo._id;
        editTodoNameInput.value = todo.name;
        editTodoDescriptionInput.value = todo.description;
        addTodoForm.style.display = 'none';
        editTodoForm.style.display = 'block';
      })
      .catch(error => console.error('Error fetching todo for edit:', error));
  };

  // Cập nhật Todo
  updateTodoButton.addEventListener('click', async () => {
    const name = editTodoNameInput.value;
    const description = editTodoDescriptionInput.value;

    try {
      const response = await fetch(`${apiUrl}/${currentTodoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
      });
      if (response.ok) {
        fetchTodos(); // Reload todos after updating
        editTodoForm.style.display = 'none';
        addTodoForm.style.display = 'block';
      } else {
        alert('Failed to update todo');
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  });

  // Hủy chỉnh sửa Todo
  cancelEditButton.addEventListener('click', () => {
    editTodoForm.style.display = 'none';
    addTodoForm.style.display = 'block';
  });

  // Xóa Todo
  window.deleteTodo = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTodos(); // Reload todos after deletion
      } else {
        alert('Failed to delete todo');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Lấy danh sách todos khi tải trang
  fetchTodos();
});
