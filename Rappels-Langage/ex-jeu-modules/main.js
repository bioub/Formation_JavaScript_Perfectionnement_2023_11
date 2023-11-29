// Exercice
// Créer un package.json avec la clé "type": "module" dans ce dossier
// Reprendre le code du jeu
// Dans random.js exporter les 4 fonctions
// Dans jeu.js importer getRandomInt, transformer les require en import (en cliquant sur l'icone ampoule de VScode)
// puis exporter Jeu
// dans main.js importer Jeu

import { Jeu } from "./jeu.js";

const game = new Jeu();
game.jouer()
