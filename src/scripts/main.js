'use strict';

const items = [...document.querySelectorAll('li')];
const list = document.querySelector('.tree');

list.style.position = 'absolute';
list.style.top = `calc(50% - ${list.offsetHeight / 2}px)`;
list.style.left = `calc(50% - ${list.offsetWidth / 2}px)`;

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (event) => {
  const target = event.target.nextElementSibling;

  if (target.tagName === 'UL') {
    target.hidden = !target.hidden;
  }
});
