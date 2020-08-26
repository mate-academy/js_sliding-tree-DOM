'use strict';

const tree = document.querySelector('.tree');
const treePosition = tree.getBoundingClientRect();

tree.style.position = 'absolute';
tree.style.top = `${treePosition.top}px`;
tree.style.left = `${treePosition.left}px`;

const listItems = [...document.querySelectorAll('li')];

for (const item of listItems) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

document.addEventListener('click', (event) => {
  const item = event.target;

  if (item.nextElementSibling.tagName === 'UL') {
    item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
  }
});
