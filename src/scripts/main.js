'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

headers.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', e => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
