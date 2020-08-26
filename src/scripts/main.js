'use strict';

const tree = document.querySelector('.tree');
const listElements = [...document.querySelectorAll('li')];

listElements.map(li => {
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
