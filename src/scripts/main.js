'use strict';

const tree = document.querySelector('.tree');
const elements = document.querySelectorAll('li');

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
