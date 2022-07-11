'use strict';

// write code here

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach(item => {
  if (item.children.length) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', (e) => {
  const element = e.target.closest('span').nextSibling;

  element.hidden = !element.hidden;
});
