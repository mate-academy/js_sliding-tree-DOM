'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

listItems.forEach(item => {
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
