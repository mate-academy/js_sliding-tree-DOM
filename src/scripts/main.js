'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const li of list) {
  const spanEl = document.createElement('span');

  li.prepend(spanEl);

  spanEl.append(spanEl.nextSibling);
}

tree.addEventListener('click', e => {
  const item = e.target.closest('span').nextSibling;

  if (!item) {
    return;
  }

  if (item.hidden) {
    item.hidden = false;
  } else {
    item.hidden = true;
  }
});
