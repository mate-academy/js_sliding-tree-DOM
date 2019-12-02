'use strict';

const ul = document.querySelectorAll('ul');
const tree = document.querySelector('.tree');

[...ul].forEach(elem => {
  if (elem.parentElement.tagName === 'LI') {
    const span = document.createElement('span');

    elem.parentNode.prepend(span);
    span.append(span.nextSibling);
  }
});

const hideList = function() {
  const item = event.target.closest('span');

  if (!item) {
    return;
  }

  const itemList = item.parentNode.querySelector('ul');

  itemList.hidden = !itemList.hidden;
};

tree.addEventListener('click', hideList);
