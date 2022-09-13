'use strict';

// write code here
const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (events) => {
  const item = events.target.nextSibling;

  if (!item) {
    return;
  }
  item.hidden = !item.hidden;
});
