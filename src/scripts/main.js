'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const ul = e.target.nextElementSibling;

  ul.hidden = !ul.hidden;
});
