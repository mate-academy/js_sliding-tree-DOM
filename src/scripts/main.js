'use strict';

const list = document.querySelectorAll('li');

list.forEach((item) => {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return false;
  }

  const itemList = e.target.parentNode.querySelector('ul');

  if (itemList) {
    itemList.hidden = !itemList.hidden;
  }
});
