'use strict';

const tree = document.querySelector('.tree');
const list = [...document.querySelectorAll('li')];

list.map((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const ul = e.target.nextElementSibling;

  if (ul.tagName === 'UL') {
    ul.hidden = !ul.hidden;
  }
});
