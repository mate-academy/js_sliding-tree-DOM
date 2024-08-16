'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

list.forEach((li) => {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
