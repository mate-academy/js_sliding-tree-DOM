'use strict';

const tree = document.querySelector('.tree');
const headline = document.querySelectorAll('li');

headline.forEach(el => {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (handler) => {
  const item = handler.target.closest('span');

  if (!item || !item.nextSibling) {
    return;
  }

  item.nextSibling.hidden = !item.nextSibling.hidden;
});
