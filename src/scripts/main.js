'use strict';

const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

headers.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', clickEvent => {
  clickEvent.target.nextSibling.hidden = !clickEvent.target.nextSibling.hidden;
});
