'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  span.classList.add('show');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;

  if (childrenContainer.hidden) {
    e.target.classList.toggle('show');
  } else {
    e.target.classList.toggle('show');
  }
};
