'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

liAll.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', el => {
  el.target.nextSibling.hidden = !el.target.nextSibling.hidden;
});
