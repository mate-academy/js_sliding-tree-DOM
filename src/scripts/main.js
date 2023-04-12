'use strict';

const treeItems = document.querySelectorAll('li');

treeItems.forEach(item => {
  if (item.children.length) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
