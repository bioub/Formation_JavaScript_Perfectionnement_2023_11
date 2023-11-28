// La valeur de la portée de closure
// est déterminé par la déclaration
// et pas par l'appel

function externe() {
  const closureVar = 'closureVar';
  function interne() {
    console.log(closureVar);
  }
  return interne;
}

const interne = externe();
interne();
// callstack
// ^
// |
// |
// |externe - interne
// +---------------------------------------> temps
