'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const item of list) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (action) => {
  if (action.target.tagName === 'SPAN') {
    const children = action.target.nextSibling;

    if (children) {
      children.hidden = !children.hidden;
    }
  }
});
