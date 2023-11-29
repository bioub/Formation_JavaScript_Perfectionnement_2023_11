const fs = require('fs');

// Sync
// Simple à lire
// Peu performance (pas de traitement en parallèle possible)
const buffer = fs.readFileSync('.editorconfig');
console.log(buffer.toString('utf-8'));

// callstack
// ^
// |
// |
// |[readFileSync XXXXXXXXXXXXXXXXXXXXXXXXXXX][log]
// +---------------------------------------------------------> temps
// Console :



// Async
// Plus difficile à lire
// Plus performant (le thread reste disponible pendant l'opération)
fs.readFile('.editorconfig', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});

// callstack
// ^
// |
// |                                          [log ]
// |[readFile] ...                            [task]
// +---------------------------------------------------------> temps
// Console :

