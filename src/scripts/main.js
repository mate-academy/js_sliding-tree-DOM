'use strict';

// write code here
const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li');

[...lists].forEach(el => {
  const span = document.createElement('span');

  if (el.children.length > 0) {
    el.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', e => {
  if (!e.target.matches('span')) {
    return;
  }
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
