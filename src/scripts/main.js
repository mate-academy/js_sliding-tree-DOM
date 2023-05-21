'use strict';

const list = document.querySelector('.tree');
const items = list.querySelectorAll('li');

items.forEach(element => {
  const span = document.createElement('span');

  element.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', e => {
  const trigger = e.target;
  const listSibling = trigger.nextElementSibling;

  if (e.target.tagName === 'SPAN' && listSibling !== null) {
    listSibling.hidden = !listSibling.hidden;
  }
});
