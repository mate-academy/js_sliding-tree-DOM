'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const li of list) {
  if (li.children.lenght !== 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (e) => {
  const item = e.target.closest('span');

  if (!item) {
    return;
  }

  const itemList = item.parentNode.querySelector('ul');

  itemList.hidden = !itemList.hidden;
});
