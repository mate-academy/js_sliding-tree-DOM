'use strict';

const treeStart = document.querySelector('.tree');
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  const nestedUl = li.querySelector('ul');

  if (nestedUl) {
    const nodes = [];

    for (const child of li.childNodes) {
      if (child === nestedUl) {
        break;
      }
      nodes.push(child);
    }

    if (nodes.length > 0) {
      const span = document.createElement('span');

      nodes.forEach((node) => span.appendChild(node));
      li.insertBefore(span, nestedUl);
    }
  }
});

treeStart.addEventListener('click', (e) => {
  const title = e.target.closest('span');

  if (!title) {
    return;
  }

  const nestedUl = title.nextElementSibling;

  if (nestedUl) {
    if (nestedUl.style.display === 'none') {
      nestedUl.style.display = 'block';
    } else {
      nestedUl.style.display = 'none';
    }
  }
});
