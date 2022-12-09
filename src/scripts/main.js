'use strict';

const list = document.querySelector('.tree');

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (e) => {
  const item = e.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
});
