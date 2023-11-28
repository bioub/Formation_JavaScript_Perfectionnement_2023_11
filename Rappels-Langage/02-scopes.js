globalThis.globalVar = 'globalVar';

// une variable à la racine du fichier
// selon la plateforme et la config la portée peut etre :
// script, global, module ou closure
const fileVar = 'fileVar';

function externe() {
  const closureVar = 'closureVar';
  function interne() {
    const localVar = 'localVar';

    if (true) {
      const blockVar = 'blockVar';

      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(fileVar);
      console.log(globalVar);
    }
  }

  interne();
}

externe();
