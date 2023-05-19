'use strict';

const list = document.querySelector('ul');
const listItems = list.querySelectorAll('li');

listItems.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);

  span.append(span.nextSibling);
});

list.addEventListener('click', (e) => {
  const item = e.target.closest('li').children[1];

  if (!item) {
    return;
  }
  item.hidden ? item.hidden = false : item.hidden = true;
});
