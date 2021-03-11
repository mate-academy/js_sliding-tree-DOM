'use strict';

// write code here

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = clickEvent.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
