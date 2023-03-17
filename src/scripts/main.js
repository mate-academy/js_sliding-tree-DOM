'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', e => {
  const sibling = e.target.closest('span');

  sibling.nextSibling.hidden = !sibling.nextSibling.hidden;
});
