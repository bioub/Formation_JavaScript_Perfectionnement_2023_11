const fs = require('fs/promises')

async function copy() {
  const buffer = await fs.readFile('.editorconfig');
  await fs.writeFile('.editorconfig.copy', buffer);
  console.log('Copy done');
}

async function main() {
  try {
    await copy();
  } catch (err) {
    console.log(err);
  }
}

main();
