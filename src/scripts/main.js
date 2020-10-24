'use strict';

const treeList = document.querySelector('.tree');
const lists = document.querySelectorAll('li');

lists.forEach(list => {
  const spanElement = document.createElement('span');

  list.prepend(spanElement);
  spanElement.append(spanElement.nextSibling);
});

treeList.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName !== 'SPAN' || !target.nextSibling) {
    return;
  }

  target.nextSibling.hidden = !target.nextSibling.hidden;
});
