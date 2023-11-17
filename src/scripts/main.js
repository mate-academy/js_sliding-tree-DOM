'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  span.className = 'list-item';
  item.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  if (e.target.className === 'list-item') {
    const currentHeader = e.target.parentNode.querySelector('ul');

    if (currentHeader) {
      currentHeader.hidden = !currentHeader.hidden;
    }
  }
});
