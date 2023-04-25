'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const item = e.target.closest('span').nextSibling;

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
