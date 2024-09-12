'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (evt) => {
  if (evt.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = evt.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
});

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}
