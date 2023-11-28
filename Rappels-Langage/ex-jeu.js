// importer l'API readline de node :
const readline = require('readline');

// configurer readline pour lire sur le clavier
const rl = readline.createInterface({
  input: process.stdin, // le clavier
  output: process.stdout, // le terminal
});

function loop() {

  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    // rejouer :
    // loop();

    // arrêter :
    // rl.close();
  });
}

loop()
