'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childContainer = event.target.parentNode.querySelector('ul');

  if (!childContainer) {
    return;
  }

  childContainer.hidden = !childContainer.hidden;
});
