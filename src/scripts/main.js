'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', currentСlick => {
  if (currentСlick.target.tagName !== 'LI') {
    return;
  }

  const childrenContainer = currentСlick.target.querySelector('ul');

  childrenContainer.hidden = !childrenContainer.hidden;
});
