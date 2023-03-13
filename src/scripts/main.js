'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', e => {
  const childContainer = e.target.parentNode.querySelector('ul');

  if (!e.target.closest('span') || !childContainer) {
    return;
  }

  childContainer.hidden = !childContainer.hidden;
});
