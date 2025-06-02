'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  tree.querySelectorAll('li').forEach((li) => {
    if (!li.querySelector('span')) {
      const span = document.createElement('span');

      span.textContent = li.firstChild.nodeValue.trim();
      li.firstChild.replaceWith(span);
    }
  });

  tree.addEventListener('click', (eventy) => {
    const header = eventy.target.closest('span');

    if (header) {
      const parentBlock = header.parentElement;
      const children = parentBlock.querySelector('ul');

      if (children) {
        children.style.display =
          children.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
});
