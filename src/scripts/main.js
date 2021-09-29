'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const item = e.target;

  if (item.tagName === 'SPAN') {
    item.nextSibling.hidden = !item.nextSibling.hidden;
  }
});
