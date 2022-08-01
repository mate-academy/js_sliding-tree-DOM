'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const children = e.target.parentNode.querySelector('ul');

  if (!children) {
    return;
  }

  children.hidden = !children.hidden;
});
