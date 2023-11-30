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
