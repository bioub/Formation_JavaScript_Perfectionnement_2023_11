function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// importer l'API readline de node :
const readline = require('readline');

// configurer readline pour lire sur le clavier
const rl = readline.createInterface({
  input: process.stdin, // le clavier
  output: process.stdout, // le terminal
});

function jouer() {
  if (essais.length) {
    console.log(`Vous avez déjà joué : ${essais.join(' - ')}`);
  }
  rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer()
