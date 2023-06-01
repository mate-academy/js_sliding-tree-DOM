'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
});
