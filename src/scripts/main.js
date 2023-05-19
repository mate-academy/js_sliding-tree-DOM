'use strict';

const list = document.querySelector('ul');
const listItems = list.querySelectorAll('li');

listItems.forEach(li => {
  if (li) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
});

list.addEventListener('click', (e) => {
  if (!e.target.closest('li')) {
    return;
  }

  const item = e.target.closest('li').children[1];

  item.hidden = !item.hidden;
});
