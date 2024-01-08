/* eslint-disable no-useless-return */
'use strict';

const treeList = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

headers.forEach(header => {
  const span = document.createElement('span');

  span.className = 'tree__item';
  header.prepend(span);
  span.append(span.nextSibling);
});

treeList.addEventListener('click', (e) => {
  if (e.target.className === 'tree__item') {
    const children = e.target.parentNode.children;

    if (!children.length) {
      return;
    }

    const ul = children[1];

    ul.hidden = !ul.hidden;
  }
});
