const fs = require('fs');

// Sync
// Simple à lire
// Peu performance (pas de traitement en parallèle possible)
try {
  const buffer = fs.readFileSync('.editorconfig');
  fs.writeFileSync('.editorconfig.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err);
}

// callstack
// ^
// |
// |
// |[readFileSync XXXXXXXXXXX][writeFileSync XXXXXXXXXXX][log]
// +---------------------------------------------------------> temps
// Console :



// Async
// Plus difficile à lire
// Plus performant (le thread reste disponible pendant l'opération)
// Style que prend le code : Callback Hell / Pyramid of Doom
fs.readFile('.editorconfig', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.editorconfig.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy done');
      }
    });
  }
});

// callstack
// ^
// |
// |                      [writeFile]         [log ]
// |[readFile] ...        [task] ...          [task]
// +---------------------------------------------------------> temps
// Console :

