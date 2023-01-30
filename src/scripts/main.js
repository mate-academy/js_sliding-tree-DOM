'use strict';

const listTree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const el of list) {
  const createSpan = document.createElement('span');

  el.prepend(createSpan);

  createSpan.append(createSpan.nextSibling);
}

listTree.addEventListener('click', (e) => {
  const item = e.target.closest('span').nextSibling;

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
