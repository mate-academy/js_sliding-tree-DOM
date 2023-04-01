'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

liAll.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', e => {
  const clickedElement = e.target;
  const nextSibling = clickedElement.nextSibling;

  if (nextSibling.hidden) {
    nextSibling.hidden = false;
  } else {
    nextSibling.hidden = true;
  }
});
