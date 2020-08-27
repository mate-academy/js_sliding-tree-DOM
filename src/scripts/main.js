'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');
const getFixed = tree.getBoundingClientRect();
let childrenContainer;

tree.style.cssText = `
  position: absolute;
  top: ${getFixed.top}px;
  left: ${getFixed.left}px;
`;

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }
  childrenContainer = event.target.parentNode.querySelector('ul');
  childrenContainer.hidden = !childrenContainer.hidden;
});
