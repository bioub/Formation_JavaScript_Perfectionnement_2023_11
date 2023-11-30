console.log(typeof Math); // object
console.log(typeof JSON); // object

console.log(typeof Number); // function
console.log(Number instanceof Object); // true

// On peut étendre un objet (ajouter un clé/valeur) :
console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3
// ou via Object.defineProperty si besoin de paramétrer writable et enumerable

delete Math.sum;
console.log(Math.sum); // undefined

// Dans les sources, c'est une mauvaise pratique d'étendre les objets
// qu'on a pas soit même créé (risque de conflit)

// Pour créer ses objets
// il existe 2 système :
// - object literal
// - constructor (fonction constructeur)

// object literal, 2 cas d'utilisation
// - un objet ponctuel (créé une fois)
// - plusieurs instances (mais sans méthodes)

const romain = {
  name: 'Romain',
  // hello() {}
};

const toto = {
  name: 'Toto',
  // hello() {}
};

// namespace object (regroupement de fonctions)
// aujourd'hui c'est une mauvaise pratique (il vaut mieux
// exporter 2 fonctions)
const MyMath = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
};

// constructor pour les autres cas

// function Contact(prenom) {
//   // if (prenom.length > 3) {
//     this.name = prenom;
//   // }
// }

// Contact.prototype.hello = function() {
//   return `Hello ${this.name}`;
// }

class Contact {
  constructor(prenom) {
    // if (prenom.length > 3) {
    this.name = prenom;
    // }
  }
  hello() {
    return `Hello ${this.name}`;
  }
}


const contact = new Contact('Romain');
console.log(typeof contact); // object
console.log(contact.name); // Romain
console.log(contact.hello()); // Hello Romain

console.log(contact.name !== undefined); // il est dans l'objet
console.log(contact.hello !== undefined); // il est dans le prototype
console.log(contact.hasOwnProperty('name')); // il est dans l'objet
console.log(contact.hasOwnProperty('hello')); // il n'est pas dans l'objet

// difference String.prototype sur MDN et String.

// String.prototype.charCodeAt (on l'appelle sur l'objet de type string)
const str = 'ABC';
console.log(str.charCodeAt(0)); // 65

// String.fromCharCode (statique, on l'appelle sur la "classe")
const newStr = String.fromCharCode(65, 66, 67);
console.log(newStr); // 'ABC'
