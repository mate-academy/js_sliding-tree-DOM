'use strict';

// eslint-disable-next-line no-shadow
function hideList(event) {
  const item = event.target.closest('span');

  if (!item || !list.contains(item)) {
    return;
  }

  const itemList = item.parentNode.querySelector('ul');

  if (!itemList) {
    return;
  }

  itemList.hidden = !itemList.hidden;
}

// eslint-disable-next-line no-shadow
function listWrapper(list) {
  for (const li of list.querySelectorAll('li')) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

const list = document.querySelector('.tree');

list.addEventListener('click', hideList);

listWrapper(list);
