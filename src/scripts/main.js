'use strict';

const liItems = document.querySelectorAll('li');

liItems.forEach((li) => {
  const firstChild = li.firstChild;
  const text = firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;

  firstChild.replaceWith(span);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (eventClick) => {
  const sp = eventClick.target.closest('span');

  if (!sp) {
    return;
  }

  const subTree = sp.parentElement.querySelector('ul');

  if (!subTree) {
    return;
  }

  subTree.hidden = !subTree.hidden;
});
