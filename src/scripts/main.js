'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
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
