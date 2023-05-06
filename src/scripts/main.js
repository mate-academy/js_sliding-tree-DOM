'use strict';

const items = [...document.querySelectorAll('li')];

for (const item of items) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', e => {
  const item = e.target.closest('span').nextSibling;

  if (item) {
    item.hidden = !item.hidden;
  }
})
