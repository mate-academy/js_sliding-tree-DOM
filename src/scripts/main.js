'use strict';

const tree = document.querySelector('.tree');
const newLi = document.querySelectorAll('li');

for (const key of newLi) {
  const span = document.createElement('span');

  key.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (events) => {
  const item = events.target.nextSibling;

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
