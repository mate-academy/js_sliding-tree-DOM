'use strict';

const list = document.querySelector('.tree');
const listItem = document.querySelectorAll('li');

for (const li of listItem) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (e) => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
