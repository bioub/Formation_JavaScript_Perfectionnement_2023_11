const names = ['Romain', 'Jean'];

function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

for (const n of names) {
  console.log(hello(n));
}
