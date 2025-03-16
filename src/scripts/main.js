'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach((li) => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'SPAN') {
    ev.target.nextSibling.hidden = !ev.target.nextSibling.hidden;
  }
});
