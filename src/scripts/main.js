'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach(item => {
  if (item.children.length) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', e => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
