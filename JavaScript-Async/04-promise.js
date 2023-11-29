const fs = require('fs/promises')

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

// Dans cette version il y a toujours le callback hell
// fs.readFile('.editorconfig')
//   .then((buffer) => {
//     fs.writeFile('.editorconfig.copy', buffer)
//       .then(() => {
//         console.log('Copy done');
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// Plus de callback hell
// fs.readFile('.editorconfig')
//   .then((buffer) => {
//     return fs.writeFile('.editorconfig.copy', buffer)
//   })
//   .then(() => {
//     console.log('Copy done');
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// Avec les arrow function ce qui suit la fleche est la valeur de retour
fs.readFile('.editorconfig')
  .then((buffer) => fs.writeFile('.editorconfig.copy', buffer))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log(err))
