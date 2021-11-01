'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
});

list.addEventListener('click', e => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
