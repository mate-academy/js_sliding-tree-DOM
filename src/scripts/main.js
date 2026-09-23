'use strict';

const tree = document.querySelector('.tree');
const treeList = document.querySelectorAll('li:has(ul)');

treeList.forEach((li) => {
  const title = document.createElement('span');

  title.append(li.firstChild);
  li.prepend(title);
});

tree.addEventListener('click', (e) => {
  const spanHeader = e.target.closest('span');

  if (!spanHeader) {
    return;
  }

  const subTree = spanHeader.nextElementSibling;

  if (!subTree) {
    return;
  }

  subTree.hidden = !subTree.hidden;
});
