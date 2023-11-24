'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  const span = document.createElement('span');

  span.id = 'listItem';
  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', e => {
  if (e.target.id === 'listItem') {
    const header = e.target.parentNode.querySelector('ul');

    header && (header.hidden = !header.hidden);
  }
});
