'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

headers.forEach(header => {
  const span = document.createElement('span');

  header.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', e => {
  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
