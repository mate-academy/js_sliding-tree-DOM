'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.querySelectorAll('li').forEach((li) => {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span);

    span.addEventListener('click', () => {
      const childrenContainer = li.querySelector('ul');

      if (childrenContainer) {
        childrenContainer.hidden = !childrenContainer.hidden;
      }
    });
  });
});
