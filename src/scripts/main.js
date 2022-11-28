'use strict';

const ul = document.querySelector('.tree');
const li = document.querySelectorAll('li');

[...li].forEach(element => {
  const span = document.createElement('span');

  element.prepend(span);
  span.append(span.nextSibling);
});

ul.addEventListener('click', (e) => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
