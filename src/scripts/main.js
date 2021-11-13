'use strict';

const list = document.querySelector('.tree');
const item = document.querySelectorAll('li');

item.forEach(elem => {
  if (elem.children.length > 0) {
    const span = document.createElement('span');

    elem.prepend(span);
    span.append(span.nextSibling);
  }
});

list.addEventListener('click', e => {
  if (e.target.closest('span')) {
    const span = e.target.closest('span').nextSibling;

    span.hidden = !span.hidden;
  }
});
