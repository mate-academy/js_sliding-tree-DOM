'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function(action) {
  if (action.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = action.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return undefined;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
};
