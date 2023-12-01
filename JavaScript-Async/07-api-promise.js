const fs = require('fs/promises');

// Problème : dans l'ordre les callbacks vont s'exécuter ?
// fs.readFile('a.txt').then((bufferA) => {
//   console.log(bufferA.toString('utf-8'));
// });
// fs.readFile('b.txt').then((bufferB) => {
//   console.log(bufferB.toString('utf-8'));
// });

// All : combine les promesses en entrée en une promesse de sortie
// qui sera résolue (le callback du then est appelé) lorsque toutes les promesses
// en entrée auront été résolues
// Si les promesses résolvaient une valeur, la promesses combinée fourni un tableau
// de valeur dans l'ordre de création (et pas de résolution)
// Si l'une est rejectée (le callback du catch est appelé) l'ensemble est rejeté
Promise.all([fs.readFile('a.txt'), fs.readFile('b.txt')]).then(([bufferA, bufferB]) => {
  console.log(bufferA.toString('utf-8'));
  console.log(bufferB.toString('utf-8'));
})

const files = ['a.txt', 'b.txt'];

// Privilégier Promise.all avec un map
Promise.all(files.map((f) => fs.readFile(f))).then(([bufferA, bufferB]) => {
  console.log(bufferA.toString('utf-8'));
  console.log(bufferB.toString('utf-8'));
});

// plutot qu'une boucle où les fichiers vont etre lu en sequence et pas en parallèle :
for (const f of files) {
  const buffer = await fs.readFile(f);
}


// AllSettled : idem All sauf que on récupére tous les résultats qu'ils échouent ou non
Promise.allSettled([fs.readFile('a.txt'), fs.readFile('b.txt')]).then(([objA, objB]) => {
  console.log(objA);
  console.log(objB);
})

// Race : combine les promesses en entrée en une promesse de sortie
// qui sera résolue (le callback du then est appelé) lorsque la première aura été résolue (dans l'ordre de résolution pas du tableau en entrée)
// Si la première est rejectée (le callback du catch est appelé) l'ensemble est rejeté

// Any : idem Race saufe que si la première est rejetée, on attend la suivante
// l'ensemble est rejeté si tout est en erreur


// Constructor
// function timeout(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delay)
//   })
// }

const { promisify } = require('util');
const timeout = promisify(setTimeout);

timeout(1000).then(() => {
  console.log('1s');
})
