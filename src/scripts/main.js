'use strict';

const tree = document.querySelector('.tree');
const selectors = tree.querySelectorAll('li');

for (const li of selectors) {
  const span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (action) => {
  if (action.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
