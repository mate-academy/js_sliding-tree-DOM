'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

list.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);

  span.append(span.nextSibling);
});

tree.addEventListener('click', even => {
  const element = even.target.closest('li').children[1];

  if (element) {
    element.hidden = !element.hidden;
  }
});
