'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  const newSpan = document.createElement('span');

  item.prepend(newSpan);
  newSpan.append(newSpan.nextSibling);
}

list.addEventListener('click', (e) => {
  const li = e.target.closest('span').nextSibling;

  li.hidden = !li.hidden;
});
