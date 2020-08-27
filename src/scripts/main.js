'use strict';

const tree = document.querySelector('.tree');
const elements = document.querySelectorAll('li');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

[...elements].forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (event) => {
  const sibling = event.target.nextElementSibling;

  if (sibling.tagName === 'UL') {
    sibling.hidden = !sibling.hidden;
  }
});
