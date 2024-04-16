'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const list = e.target.closest('li').querySelector('ul');

    if (list) {
      list.hidden = !list.hidden;
    }
  }
});
