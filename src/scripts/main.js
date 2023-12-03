'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', function(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
