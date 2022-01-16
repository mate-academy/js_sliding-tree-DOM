'use strict';

const list = document.querySelectorAll('li');

for (const li of list) {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (eventObj) => {
  const item = eventObj.target.closest('span');

  if (!item) {
    return;
  }

  if (item.nextSibling.hidden) {
    item.nextSibling.hidden = false;
  } else {
    item.nextSibling.hidden = true;
  }
});
