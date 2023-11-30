function hello() {
  const inputElt = document.querySelector('#input');
  const spanElt = document.querySelector('#output');
  inputElt.addEventListener('input', () => {
    spanElt.innerText = inputElt.value;
  });
}
