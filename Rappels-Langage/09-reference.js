let prenom1 = 'Romain';
let prenom2 = prenom1;
prenom2 = 'Toto';

console.log(prenom1); // Romain

let objet1 = { prenom: 'Romain' };
let objet2 = objet1;
objet2.prenom = 'Toto';

console.log(objet1.prenom); // Toto
