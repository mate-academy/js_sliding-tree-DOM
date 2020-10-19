'use strict';

const tree = document.querySelector('.tree');
const treeListsElements = tree.querySelectorAll('li');

treeListsElements.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', event => {
  const item = event.target;

  if (item.tagName !== 'SPAN' || !item.nextElementSibling) {
    return;
  }

  item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
});
