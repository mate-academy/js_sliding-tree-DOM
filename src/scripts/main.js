'use strict';

const tree = document.querySelector('.tree');
const treeLi = tree.querySelectorAll('li');

[...treeLi].map(item => {
  if (item.childNodes.length > 1) {
    return item.prepend(document.createElement('span'));
  }
});

const spanLi = tree.querySelectorAll('span');

[...spanLi].map(item => item.append(item.nextSibling));

tree.addEventListener('click', event => {
  const point = event.target;
  const pointFirstChild = point.nextSibling;

  if (point.tagName !== 'SPAN' || !pointFirstChild) {
    return;
  }

  if (pointFirstChild.hidden) {
    pointFirstChild.hidden = false;
  } else {
    pointFirstChild.hidden = true;
  }
});
