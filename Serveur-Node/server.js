const express = require('express');
const cors = require('cors');

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
  const todo = res.body; // déjà un objet parsé par express.json()

  // Finir ce code
  // générer un id différent des existants
  // le stocker dans le tableau
  // retourner en json la nouvelle todo, id compris

})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
