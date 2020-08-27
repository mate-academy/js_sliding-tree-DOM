'use strict';

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

tree.querySelectorAll('li').forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (event) => {
  const list = event.target.nextSibling;

  if (list) {
    list.hidden = !list.hidden;
  }
});
