'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of list) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const item = e.target.nextSibling;

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
