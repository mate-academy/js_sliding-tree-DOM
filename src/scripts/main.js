'use strict';

const tree = document.querySelector('.tree');
const treeItems = document.querySelectorAll('li');

treeItems.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
