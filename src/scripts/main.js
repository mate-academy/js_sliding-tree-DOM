'use strict';

[...document.querySelectorAll('li')].map(liElement => {
  const spanElement = document.createElement('span');

  liElement.prepend(spanElement);
  spanElement.append(spanElement.nextSibling);
});

const list = document.querySelector('.tree');

list.addEventListener('click', (action) => {
  const item = action.target.closest('span');

  if (!item || !item.nextSibling) {
    return;
  }

  item.nextSibling.hidden = !item.nextSibling.hidden;
});
