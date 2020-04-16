'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('.tree > li');

for (const item of list) {
  const span = document.createElement('span');

  span.classList.add('head');
  span.append(item.firstChild);
  item.prepend(span);
}

function onClick(value) {
  if (!value.target.matches('.head')) {
    return;
  }

  const elem = value.target.nextSibling;

  elem.hidden = !elem.hidden;
}

tree.addEventListener('click', onClick);
