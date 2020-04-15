'use strict';

function onClick(value) {
  const item = value.target;
  const elem = item.firstElementChild;

  if (elem.matches('ul')) {
    elem.hidden = !elem.hidden;
  }
}

const list = document.querySelector('.tree');

for (const child of list.children) {
  child.classList.add('head');
}

list.addEventListener('click', onClick);
