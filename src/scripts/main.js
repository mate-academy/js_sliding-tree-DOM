'use strict';

const tree = document.querySelector('.tree');
const treeElements = tree.querySelectorAll('li');

treeElements.forEach((el) => {
  const span = document.createElement('SPAN');

  el.prepend(span);
  span.append(span.nextSibling);

  span.setAttribute('class', 'span');
});

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const child = e.target.parentNode.querySelector('ul');

  if (child) {
    child.hidden = !child.hidden;
  }
});
