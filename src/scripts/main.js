'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

[...liAll].map(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (event) => {
  const ul = event.target.nextElementSibling;

  if (ul.tagName === 'UL') {
    ul.hidden = !ul.hidden;
  }
});
