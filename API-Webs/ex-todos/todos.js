/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
export function createTodoItem(todo) {
  /*
  <div class="todo-item" data-todo-id="123">
    <input type="checkbox" class="todo-completed">
    <span class="todo-title">Acheter du pain</span>
    <button class="todo-btn-delete">-</button>
  </div>
  */
  const divEl = document.createElement('div');
  divEl.className = "todo-item";
  divEl.dataset.todoId = todo.id;

  // Exercice 1
  // Ajouter la checkbox
  // et la cocher si todo.completed vaut true
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed;

  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = todo.title;

  // Exercice Bonus
  // Ecouter le double click de la span
  // La transformer en champs (replaceWith)
  // Si on appuie sur la touche Entrée dans le champ
  // revenir à la balise span.

  // Exercice 2
  // Ajouter le bouton moins
  // Ecouter son click et supprimer la balise div
  const buttonEl = document.createElement('button');
  buttonEl.className = "todo-btn-delete";
  buttonEl.innerText = '-';

  divEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return divEl;
}
