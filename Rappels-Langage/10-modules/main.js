import { hello } from "./hello.js";

const names = ['Romain', 'Jean'];

for (const n of names) {
  console.log(hello(n));
}
