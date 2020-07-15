'use strict';

const tree = document.querySelector('.tree');
const treeLi = tree.querySelectorAll('li');

[...treeLi].map(item => {
  if (item.childNodes.length > 1) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
});

tree.addEventListener('click', event => {
  const point = event.target;
  const pointFirstChild = point.nextSibling;

  if (point.tagName !== 'SPAN' || !pointFirstChild) {
    return;
  }

  pointFirstChild.hidden = !pointFirstChild.hidden;
});
