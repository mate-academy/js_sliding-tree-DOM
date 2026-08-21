'use strict';

const tree = document.querySelector('.tree');

const treeItems = tree.querySelectorAll('li');

treeItems.forEach((n) => {
  const span = document.createElement('span');

  span.append(n.firstChild);

  n.prepend(span);
});

tree.addEventListener('click', (e) => {
  const nestedUl = e.target.closest('li').querySelector('ul');

  if (!tree.contains(e.target)) {
    return;
  }

  if (nestedUl) {
    nestedUl.hidden = !nestedUl.hidden;
  }
});
