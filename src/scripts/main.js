'use strict';

const tree = document.querySelector('.tree');
const liItems = tree.querySelectorAll('li');

liItems.forEach((li) => {
  const headerWrapper = document.createElement('span');

  li.prepend(headerWrapper);
  headerWrapper.append(headerWrapper.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'span') {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});
