'use strict';

// write code here
const li = [...document.querySelectorAll('li')];
const list = document.querySelector('.tree');

li.forEach(x => {
  const span = document.createElement('span');

  x.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', e => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
