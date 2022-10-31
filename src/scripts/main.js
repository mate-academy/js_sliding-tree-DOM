'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const listItem of list) {
  const span = document.createElement('span');

  if (listItem.children.length) {
    listItem.prepend(span);
    span.append(span.nextSibling);
  }
};

tree.addEventListener('click', (e) => {
  const items = e.target.closest('span').nextSibling;

  items.hidden = !items.hidden;
});
