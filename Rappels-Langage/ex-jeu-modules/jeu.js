const readline = require('readline');
const process = require('process');

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;
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
