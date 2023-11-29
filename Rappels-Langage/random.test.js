
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// vitest est un framework de test
// même API que jest
// vitest supporte le TypeScript par défaut entre autre

// dans vitest/jest un test automatisé se représente par l'appel de la fonction
// test

// Mauvais test puisque si le nombre est 100 pile
// test('getRandomInt genere un nombre entre 0 et 100 si min=0 et max=100', () => {
//   const entierAlea = getRandomInt(0, 100);
//   expect(entierAlea).toBeGreaterThanOrEqual(0)
//   expect(entierAlea).toBeLessThan(100);
// })

test('getRandomInt genere 50 si min=0 et max=100', () => {
  const originalRandom = Math.random;
  Math.random = () => 0.5;
  const entierAlea = getRandomInt(0, 100);
  expect(entierAlea).toBe(50);
  Math.random = originalRandom;
})
