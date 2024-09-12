'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  if (item.childNodes.length <= 1) {
    continue;
  }

  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const item = e.target;

  if (!item || item.tagName !== 'SPAN') {
    return;
  }

  item.nextSibling.hidden = !item.nextSibling.hidden;
});
