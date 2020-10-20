'use strict';

// write code here
const tree = document.querySelector('.tree');
const treeHeaders = tree.querySelectorAll('ul');

treeHeaders.forEach(item => {
  const span = document.createElement('span');

  item.closest('li').prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const list = event.target.nextSibling;

    list.hidden = !list.hidden;
  }
});
