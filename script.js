document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const todoItems = document.querySelector('.todo-items');
  
    addButton.addEventListener('click', function(e) {
      e.preventDefault();
  
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
  
        const label = document.createElement('label');
        label.textContent = taskText;
  
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
  
        todoItems.appendChild(todoItem);
  
        taskInput.value = '';
      }
    });
  });
  