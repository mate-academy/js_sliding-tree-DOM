'use strict';

const tree = document.querySelector('.tree');
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((treeItem) => {
  const span = document.createElement('span');

  span.textContent = treeItem.firstChild.textContent.trim();
  treeItem.firstChild.textContent = '';
  treeItem.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const childUl = e.target.parentNode.querySelector('ul');

    if (childUl) {
      childUl.style.display =
        childUl.style.display === 'none' ? 'block' : 'none';
    }
  }
});
