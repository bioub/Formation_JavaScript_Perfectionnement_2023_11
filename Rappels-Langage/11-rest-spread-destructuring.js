const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];


//    ['Rom' , 'B']
const [prenom, nom, suffix = ''] = fullName.split(' ');

console.log(prenom, nom);


const coords = { x: 1, y: 2 };

// const varX = coords.x;
// const varY = coords.y;

//    { x: 1   , y: 2    }
const { x: varX, y: varY } = coords;

// const contact = { prenom: prenom, nom: nom }

// shorthand property
const contact = { prenom, nom }


const { x, y, z = 0 } = coords;



// REST array ES2015
// conversion de syntaxe
// d'une liste de valeurs vers un tableau
// ici de 3, 4 vers [3, 4]
function sum(a, b, ...otherNbs) {
  let result = a + b;

  for (const nb of otherNbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD array ES2015
// inverse de REST
// conversion de syntaxe
// d'un tableau vers une liste de valeur
// ici de [3, 4] vers 3, 4

const nbs = [3, 4];

function sub(a, b) {
  return a - b;
}

console.log(sub(...nbs));

// SPREAD est utiliser pour cloner
const cloneNbs = [1, 2, ...nbs, 5, 6, 7];

// REST peut etre utilisé avec la destructuration :
const [un, deux, ...otherNbs] = cloneNbs;

console.log(otherNbs); // [3,4,5,6,7]

// REST et SPREAD fonctionnent sur les objets depuis ES2018

const { z = 0, ...coords2d } = coords;

const cloneCoords = { ...coords };
