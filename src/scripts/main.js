'use strict';

const list = document.querySelector('.tree');
const items = list.querySelectorAll('li');

items.forEach(element => {
  const span = document.createElement('span');

  element.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', e => {
  const triger = e.target;
  const listSibling = triger.nextElementSibling;

  if (e.target.tagName === 'SPAN' && listSibling !== null) {
    listSibling.hidden = !listSibling.hidden;
  }
});
