'use strict';

const list = document.querySelector('.tree');
const items = [ ...document.querySelectorAll('li') ];

items.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);

  span.textContent = span.nextSibling.textContent.trim();
  span.nextSibling.remove();
});

list.addEventListener('click', event => {
  const target = event.target.nextSibling;

  if (target.tagName !== 'UL') {
    return;
  }

  target.hidden = !target.hidden;
});
