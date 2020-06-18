'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');

  item.prepend(span);
  span.prepend(span.nextSibling);
}

function closer(action) {
  if (action.target.tagName === 'SPAN') {
    const list = action.target.parentElement.querySelector('ul');

    if (list) {
      list.hidden = !list.hidden;
    }
  }
}

tree.addEventListener('click', closer);
