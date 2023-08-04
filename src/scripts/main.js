'use strict';

const list = document.querySelector('.tree');
const items = list.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  const element = e.target.nextSibling;

  if (e.target.tagName === 'SPAN' && !e.target.classList.contains('isHidden')) {
    element.style.display = 'none';
    e.target.classList.add('isHidden');
  } else if (e.target.classList.contains('isHidden')) {
    e.target.classList.remove('isHidden');
    element.style.display = 'block';
  }
});
