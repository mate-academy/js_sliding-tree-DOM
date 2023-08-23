'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  };

  const item = e.target.nextElementSibling;

  item.style.display === 'none'
    ? item.style.display = 'block'
    : item.style.display = 'none';
});
