'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((item) => {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(span);

    span.addEventListener('click', (e) => {
      const nestedUl = item.querySelector('ul');

      if (nestedUl) {
        nestedUl.style.display =
          nestedUl.style.display === 'none' ? 'block' : 'none';
      }
      e.stopPropagation();
    });
  });
});
