'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (e.target.tagName !== 'SPAN' || !childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
