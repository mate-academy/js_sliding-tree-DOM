'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('li').forEach(elem => {
  const span = document.createElement('span');

  elem.prepend(span);
  span.prepend(span.nextSibling);
});

tree.addEventListener('click', el => {
  const item = el.target.closest('li').children[1];

  if (!item) {
    return;
  }
  item.hidden = !item.hidden;
});
