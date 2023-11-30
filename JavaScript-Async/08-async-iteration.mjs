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
