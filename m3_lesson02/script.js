'use strict';
const input = document.createElement('input');

const p = document.createElement('p');

window.document.body.append(input, p);
input.addEventListener('change', e => {
  setTimeout(() => {
    p.textContent = input.value;
  }, 300);
});
