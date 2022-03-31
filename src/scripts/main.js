'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', (e) => {
  const item = e.target.closest('span');

  if (!item) {
    return;
  }

  item.nextSibling.hidden = !item.nextSibling.hidden;
});
