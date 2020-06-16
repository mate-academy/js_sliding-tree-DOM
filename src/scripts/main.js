'use strict';

const tree = document.querySelector('.tree');
const liItems = document.querySelectorAll('li');

for (const item of liItems) {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
}

function hideItems(e) {
  const item = e.target.closest('li');

  if (!item) {
    return;
  }

  if (item.children.length) {
    const children = item.children[1];

    children.hidden = !children.hidden;
  }
};
tree.addEventListener('click', hideItems);
