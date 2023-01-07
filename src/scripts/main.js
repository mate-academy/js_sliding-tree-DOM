'use strict';

const tree = document.querySelector('.tree');
const headers = tree.querySelectorAll('li');

headers.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', ev => {
  const listItem = ev.target.closest('span');

  if (!listItem || !listItem.nextSibling) {
    return;
  }

  const list = listItem.nextSibling;

  list.hidden = !list.hidden;
});
