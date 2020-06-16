'use strict';

const tree = document.querySelector('.tree');
const liItems = document.querySelectorAll('li');

for (const item of liItems) {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
}

function hideItems(e) {
  const item = e.target;

  if (item.tagName === 'SPAN') {
    const list = item.parentElement.querySelector('ul');

    if (list) {
      list.hidden = !list.hidden;
    }
  }
};
tree.addEventListener('click', hideItems);
