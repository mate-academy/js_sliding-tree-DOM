'use strict';

const tree = document.querySelector('.tree');
const lis = document.querySelectorAll('li');

for (const li of lis) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

function hideList(e) {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
}

tree.addEventListener('click', hideList);
