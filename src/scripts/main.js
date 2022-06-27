'use strict';

// write code here
const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach(itemLi => {
  const span = document.createElement('span');

  itemLi.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (events) => {
  const item = events.target.nextSibling;

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
