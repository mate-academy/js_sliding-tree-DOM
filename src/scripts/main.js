'use strict';

const menu = document.querySelector('.tree');
const items = document.querySelector('li');

[...items].map(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

menu.addEventListener('click', (e) => {
  const item = e.target;

  if (item.parentNode.children[1]) {
    item.parentNode.children[1].hidden = !item.parentNode.children[1].hidden;
  }
});
