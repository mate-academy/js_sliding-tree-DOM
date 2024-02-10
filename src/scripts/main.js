'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');
  const item = li.firstChild;

  li.prepend(span);
  span.append(item);
});

tree.addEventListener('click', (e) => {
  const targetElem = e.target;

  if (targetElem.tagName === 'SPAN') {
    const list = targetElem.closest('li').querySelector('ul');

    if (list) {
      list.hidden = !list.hidden;
    }
  }
});
