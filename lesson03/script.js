'use strict';

const checkDel = text => {
  if (text === 'del') {
    const textItems = document.querySelectorAll('li');
    textItems[textItems.length - 1].remove();

    return true;
  }
};

const checkClear = text => {
  const list = document.querySelector('.list');
  if (text === 'clear') {
    list.textContent = '';
    return true;
  }
};

const checkEmpty = text => {
  if (text === '' || (/^\s+$/.test(text))) {
    textIn();
    return false;
  } else {
    return true;
  }
};
const addElem = text => {
  const list = document.querySelector('.list');
  const elem = document.createElement('li');
  elem.textContent = text;
  list.insertAdjacentElement('beforeend', elem);
  textIn();
};


const textIn = () => {
  const text = prompt('Введите текст');
  console.log('text: ', text);
  if (text === 'exit' || text === null) {
    return;
  }
  if (checkDel(text)) {
    textIn();
    return;
  }
  if (checkClear(text)) {
    textIn();
    return;
  }
  if (checkEmpty(text)) {
    addElem(text);
  }
};

textIn();
