'use strict';

const list = document.querySelectorAll('li');

list.forEach(element => {
  const elFirstChild = element.firstChild;
  const span = document.createElement('span');

  elFirstChild.parentNode.prepend(span);
  span.prepend(elFirstChild);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const item = e.target;

  if (item.nextSibling) {
    item.nextSibling.style.display = item.nextSibling.style.display === 'none'
      ? '' : 'none';
  }
});
