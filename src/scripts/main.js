'use strict';

const tree = document.querySelector('.tree');
const listElements = [...document.querySelectorAll('li')];
const coords = tree.getBoundingClientRect();

tree.style.cssText = `
  position: absolute;
  top: ${coords.top}px;
  left: ${coords.left}px;
`;

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
