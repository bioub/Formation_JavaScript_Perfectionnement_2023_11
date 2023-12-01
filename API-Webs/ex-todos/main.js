// selectionner les éléments existants au chargement de la page
// qui nous intéresse

import { createTodoItem } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const checkboxEl = document.querySelector('.todo-checkall');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const divEl = document.querySelector('.todo-list');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  inputEl.classList.remove('invalid');

  if (!inputEl.value.match(/^[\p{Alphabetic}0-9\- ]+$/u)) {
    inputEl.classList.add('invalid');
    return;
  }

  const todoItemEl = createTodoItem({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });
  divEl.prepend(todoItemEl);
  inputEl.value = '';
  inputEl.focus();
});

// Exercice 3
// Ecouter le click de la checkbox du form
// Et cocher ou décocher toutes les autres (celles de todoItem)
checkboxEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const completedList = divEl.querySelectorAll('.todo-completed');

  for (const completedEl of completedList) {
    completedEl.checked = checkboxEl.checked;
  }
})

// Exercice 5
// Modifier les exercices 2 et le bonus
// de façon à écouter les événements au niveau de divEl
// et vous servir de event.target pour déterminer si le click
// à eu lieu sur les éléments qui vous intéresse
// Attention : en écoutant le click du bouton moins ici par exemple
// vous n'aurez plus accès à divEl (naviguez dans l'arbre avec
// parentElement, children, firstElementChild...)
divEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.matches('.todo-btn-delete')) {
    target.closest('.todo-item').remove();
  }
})

divEl.addEventListener('dblclick', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.matches('.todo-title')) {
    const inputEl = document.createElement('input');
    inputEl.className = 'todo-title-edit';
    inputEl.value = target.innerText;
    target.replaceWith(inputEl);
  }
})

divEl.addEventListener('keydown', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.matches('.todo-title-edit')) {
    if (event.code === 'Enter') {
      const spanEl = document.createElement('span');
      spanEl.className = 'todo-title';
      spanEl.innerText = target.value;

      target.replaceWith(spanEl);
    }
  }
})

window.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  const inputEl = document.querySelector('.todo-title-edit');

  if (!inputEl || target === inputEl) {
    return;
  }

  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = inputEl.value;

  inputEl.replaceWith(spanEl);
})


// Exercice 6
// Au chargement de la page, envoyer une requete GET
// vers https://jsonplaceholder.typicode.com/todos
// Pour chaque todo reçu appeler createTodoItem
// pour l'afficher (comme dans le submit)


// Exercice 7
// Ecouter l'event "input" du champ de la balise form
// Stocker la valeur du champ dans localStorage
// Au chargement de la page, afficher la valeur du storage (s'il y en a une)
// dans le champs

// Exercice 8
// Au submit du formulaire, utiliser un regexp
// et String.prototype.match pour vérifier que la valeur saisie
// ne contiennent que des lettres, chiffres, tirets -, et espace
// il doit y avoir au moins 1 caractère
// ne rien faire sinon.

const valueFromStorage = localStorage.getItem('value-todo') ?? '';
inputEl.value = valueFromStorage;

inputEl.addEventListener('input', () => {
  localStorage.setItem('value-todo', inputEl.value);
});

const res = await fetch('https://jsonplaceholder.typicode.com/todos');
const todos = await res.json();

for (const todo of todos.slice(0, 10)) {
  const todoItemEl = createTodoItem(todo);
  divEl.append(todoItemEl);
}
