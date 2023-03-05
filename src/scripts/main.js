'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

list.forEach(li => {
  const span = document.createElement('span');

  span.append(li.firstChild);
  li.prepend(span);
});

tree.addEventListener('click', (e) => {
  const child = e.target.nextElementSibling;

  child.hidden = !child.hidden;
});
