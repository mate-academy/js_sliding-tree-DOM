'use strict';

// write code here
const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li > ul:first-child');

[...lists].map(item => {
  const span = document.createElement('span');

  span.append(item.previousSibling);
  item.parentElement.prepend(span);
});

tree.addEventListener('click', (event) => {
  const item = event.target.closest('span');

  if (!item || !tree.contains(item)) {
    return;
  }

  [...item.nextElementSibling.children].map(elem => elem.hidden = !elem.hidden);
});
