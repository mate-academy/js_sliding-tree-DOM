'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  if (li.children.length !== 0) {
    li.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (events) => {
  const item = events.target.matches('span');

  if (!item) {
    return;
  }

  const itemClicked = events.target;

  itemClicked.nextElementSibling.hidden
  = !itemClicked.nextElementSibling.hidden;
}
);
