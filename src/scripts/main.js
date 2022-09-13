'use strict';

const list = document.querySelector('.tree');
const listItems = list.querySelectorAll('li');

for (const item of listItems) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (events) => {
  const item = events.target.nextSibling;

  item.hidden = !item.hidden;
});
