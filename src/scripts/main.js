'use strict';

const listItem = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const x of listItem) {
  const span = document.createElement('span');

  if (x.children.length !== 0) {
    x.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', e => {
  const item = e.target.nextSibling;

  if (item.hidden) {
    item.hidden = false;
  } else {
    item.hidden = true;
  }
});
