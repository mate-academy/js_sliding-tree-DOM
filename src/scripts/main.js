'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  if (li.children.length !== 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', () => {
  const item = event.target.closest('span');

  if (!item) {
    return;
  }

  const itemList = item.parentNode.querySelector('ul');

  itemList.hidden = !itemList.hidden;
});
