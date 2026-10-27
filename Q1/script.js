const STORAGE_KEY = 'todo-items-v1';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function loadTodos() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

function saveTodos(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function toggleTodo(id) {
  const items = loadTodos();
  const updated = items.map((item) =>
    item.id === id ? { ...item, completed: !item.completed } : item
  );
  saveTodos(updated);
  renderTodos();
}

function deleteTodo(id) {
  const items = loadTodos().filter((item) => item.id !== id);
  saveTodos(items);
  renderTodos();
}

function renderTodos() {
  const items = loadTodos();

  if (!items.length) {
    list.innerHTML = '<li class="empty-state">No tasks yet. Add one above.</li>';
    return;
  }

  list.innerHTML = items
    .map(
      (item) => `
        <li class="todo-item ${item.completed ? 'completed' : ''}" data-id="${item.id}">
          <div class="todo-content">
            <input type="checkbox" ${item.completed ? 'checked' : ''} aria-label="Mark task as complete" />
            <span class="todo-text">${item.text}</span>
          </div>
          <button class="delete-btn" type="button">Delete</button>
        </li>
      `
    )
    .join('');

  list.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const item = event.target.closest('.todo-item');
      toggleTodo(item.dataset.id);
    });
  });

  list.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      const item = event.target.closest('.todo-item');
      deleteTodo(item.dataset.id);
    });
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    return;
  }

  const items = loadTodos();
  items.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });

  saveTodos(items);
  input.value = '';
  renderTodos();
});

renderTodos();
