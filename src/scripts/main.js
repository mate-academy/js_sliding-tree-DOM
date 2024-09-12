'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

[...list].forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const target = e.target.closest('span').nextSibling;

  if (!target) {
    return;
  }

  target.hidden = !target.hidden;
});
