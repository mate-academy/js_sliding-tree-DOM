'use strict';

for (const element of document.querySelectorAll('li')) {
  const newSpan = document.createElement('span');

  element.prepend(newSpan);
  newSpan.append(newSpan.nextSibling);
}

const tree = document.querySelector('.tree');
const { top, left } = tree.getBoundingClientRect();

tree.style.position = 'absolute';
tree.style.top = `${top}px`;
tree.style.left = `${left}px`;

tree.addEventListener('click', (event) => {
  const point = event.target;

  if (point.nextElementSibling.tagName === 'UL') {
    point.nextElementSibling.hidden = !point.nextElementSibling.hidden;
  }
});
