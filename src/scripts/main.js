'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

list.forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const item = e.target.nextSibling;

  if (item.style.display === 'none') {
    item.style.display = 'block';
  } else {
    item.style.display = 'none';
  }
});
