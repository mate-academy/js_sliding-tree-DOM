'use strict';

const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li');

lists.forEach((el) => {
  if (el.children.length > 0) {
    const span = document.createElement('span');

    el.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', el => {
  const item = el.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
