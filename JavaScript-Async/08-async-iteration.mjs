import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const rl = createInterface({
  input: createReadStream('.editorconfig'),
});

let lineNb = 1;
// rl.on('line', (line) => {
//   console.log(lineNb++, line);
// })

async function readFileLineByLine() {
  for await (const line of rl) {
    console.log(lineNb++, line);
  }
}

await readFileLineByLine();

import { setInterval } from 'timers/promises';

const interval = 100;
for await (const startTime of setInterval(interval, Date.now())) {
  const now = Date.now();
  console.log(now);
  if ((now - startTime) > 1000)
    break;
}
console.log(Date.now());
