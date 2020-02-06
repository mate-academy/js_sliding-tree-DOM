'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'SPAN') {
    return;
  }

  const children = target.parentNode.querySelector('ul');

  if (!children) {
    return;
  }

  children.hidden = !children.hidden;
});
