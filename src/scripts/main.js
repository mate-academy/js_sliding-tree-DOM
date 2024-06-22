'use strict';

const elem = document.querySelectorAll('li');
const list = document.querySelector('.tree');

elem.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const item = e.target.closest('li').querySelector('ul');

    if (item) {
      item.hidden = !item.hidden;
    }
  }
});
