'use strict';

const tree = document.querySelector('.tree');
const items = [...document.querySelectorAll('li')];

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', e => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
