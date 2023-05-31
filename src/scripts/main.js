'use strict';

const mainList = document.querySelector('.tree');
const listName = document.querySelectorAll('li');

[...listName].forEach(elem => {
  const span = document.createElement('span');

  elem.prepend(span);
  span.append(span.nextSibling);
});

mainList.addEventListener('click', e => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
