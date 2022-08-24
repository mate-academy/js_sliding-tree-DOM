'use strict';

const tree = document.querySelector('.tree');
const treeItems = document.querySelectorAll('li');

for (const item of treeItems) {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    span.append(item.childNodes[0]);
    item.prepend(span);
  }

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      // eslint-disable-next-line max-len
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
    }
  });
}
