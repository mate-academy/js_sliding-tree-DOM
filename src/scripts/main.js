'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('li').forEach((item) => {
  const span = document.createElement('span');

  span.appendChild(item.firstChild);
  item.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
