'use strict';

const items = document.querySelectorAll('li');
const tree = document.querySelector('ul');

for (const item of items) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

// eslint-disable-next-line no-shadow
function handler(event) {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = event.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
}

tree.addEventListener('click', handler);
