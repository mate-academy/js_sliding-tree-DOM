'use strict';

const tree = document.querySelector('.tree');
const item = document.querySelectorAll('li');

item.forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (!e.target.closest('li')) {
    return;
  };

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
