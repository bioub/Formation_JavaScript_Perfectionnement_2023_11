const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir() {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);
}

async function buildJs() {
  const buffers = await Promise.all([fs.readFile(horlogeJsPath), fs.readFile(indexJsPath)]);
  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let str = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });
  str = str.replace('<script src="./js/horloge.js"></script>', '<script src="./app.js"></script>').replace('<script src="./js/index.js"></script>', '');
  await fs.writeFile(indexHtmlDistPath, str);
}

async function main() {
  try {
    await rmAndMkdir();
    await buildJs();
    await buildHtml();
  }
  catch (err) {
    console.log(err);
  }
}

main();
