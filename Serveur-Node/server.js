const express = require('express');
const cors = require('cors');

let nextId = 4;

const todos = [
  { id: 1, title: 'ABC', completed: true },
  { id: 2, title: 'DEF', completed: true },
  { id: 3, title: 'XYZ', completed: false },
]

const app = express();
app.use(cors()); // autorise les requetes cross-origin

app.get('/todos', (req, res) => {
  res.json(todos);
});

// Exercice Stocker une todo reçu en body de
// POST /todos
app.post('/todos', express.json(), (req, res) => {
  const todo = req.body; // déjà un objet parsé par express.json()

  todo.id = nextId++;
  todos.push(todo);

  res.json(todo);
});

app.delete('/todos/:todoId', (req, res) => {
  const todoId = req.params.todoId;

  // Exercice Bonus
  // supprimer du tableau
  // et retourner la todo supprimée en JSON
  // Faire une 404 si pas de todo pour cet id
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
