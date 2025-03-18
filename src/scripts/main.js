'use strict';

// write code here
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  const firstChild = li.firstChild;

  if (firstChild && firstChild.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = firstChild.textContent;
    li.replaceChild(span, firstChild);

    span.addEventListener('click', () => {
      const ul = li.querySelector('ul');

      if (ul) {
        ul.style.display =
          ul.style.display === 'none' || ul.style.display === ''
            ? 'block'
            : 'none';
      }
    });
  }
});
