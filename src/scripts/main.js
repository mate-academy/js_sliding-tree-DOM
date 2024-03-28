'use strict';

const tree = document.querySelector('.tree');
const liItems = tree.querySelectorAll('li');

liItems.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
