'use strict';

const tree = document.querySelector('.tree');
const treeElements = document.querySelectorAll('li');

treeElements.forEach(li => {
  const span = document.createElement('span');

  span.className = 'extraSpan';
  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', e => {
  const children = e.target.nextSibling;

  if (e.target.className === 'extraSpan') {
    children.hidden = !children.hidden;
  }
});
