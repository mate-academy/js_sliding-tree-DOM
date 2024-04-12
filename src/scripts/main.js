'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('li').forEach((item) => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  const item = e.target.closest('li');

  if (!item) {
    return;
  }

  const child = item.children[1];

  if (child) {
    child.hidden = !child.hidden;
  }
});
