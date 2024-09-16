'use strict';

const liElems = document.querySelectorAll('li');
const treeEl = document.querySelector('.tree');

for (const item of liElems) {
  const spanEl = document.createElement('span');

  item.prepend(spanEl);
  spanEl.append(spanEl.nextSibling);
}

treeEl.addEventListener('click', e => {
  const item = e.target.closest('li').children[1];

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
