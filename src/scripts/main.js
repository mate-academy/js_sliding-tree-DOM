'use strict';

const tree = document.querySelector(`.tree`);

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function() {
  const childrenContainer = event.target.parentNode.querySelector('ul');

  if (event.target.tagName !== 'SPAN' || !childrenContainer) {
    return;
  }
  childrenContainer.hidden = !childrenContainer.hidden;
};
