const readline = require('readline');
const process = require('process');

// Reprendre le code de ex-jeu.js

// Exercice 1
// En vous inspirant de MyMath de 08-object.js
// Créer un namespace object Random qui regroupe
// les 4 fonctions (de la correction)
// On écrira Random.getRandomInt(0, 100) pour l'appel
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}


// Exercice 2
// Créer un classe Jeu dont le constructeur
// va créer les 3 propriétés suivantes :
// - rl (reprendre le code de ex-jeu)
// - entierAlea (créé à partir de Random)
// - essais (tableau vide)
// Faire de la fonction jouer une méthode de Jeu
// et donc passer par this. pour accéder aux valeurs de rl, entierAlea et essais
// A ce stade le constructeur ne prend pas de paramètre
// const game = new Jeu();
// game.jouer()

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    // const { min = 0, max = 100 } = options;

    this.rl = readline.createInterface({
      input: process.stdin, // le clavier
      output: process.stdout, // le terminal
    });
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
    }
    this.rl.question('Quel est le nombre ? ', (answer) => {

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un entier');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

const game = new Jeu();
game.jouer()

// Exercice 3
// Modifier le constructeur de Jeu
// de sorte à ce qu'on puisse lui passer un objet avec des paramètres
// min et max (il n'y a qu'un argument dans le constructeur de type object)
// const game = new Jeu({ min: 0, max: 100});
// game.jouer()

// Prévoir des valeurs par défaut pour min et max
// Prévoir qu'on puisse appeler Jeu sans paramètre comme dans l'ex 2
