'use strict';

const tree = document.querySelector('.tree');
const elements = document.querySelectorAll('li');

for (const li of elements) {
  if (li.children[0]) {
    const span = document.createElement('span');

    span.className = 'item';
    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', e => {
  if (e.target.className === 'item') {
    const children = e.target.parentNode.children;

    if (children.length === 0) {
      return;
    }

    const ul = children[1];

    ul.hidden = !ul.hidden;
  }
});
