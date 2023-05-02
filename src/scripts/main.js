'use strict';

document.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

const list = document.querySelector('.tree');
const items = list.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const element = e.target.nextSibling;
  const isHidden = element.style.display === 'none';

  isHidden ? element.style.display = 'block' : element.style.display = 'none';
});
