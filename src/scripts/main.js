'use strict';

// write code here
const tree = document.querySelector('.tree');
const elementTree = tree.querySelectorAll('li');

for (const item of elementTree) {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    span.append(item.childNodes[0]);
    item.prepend(span);
  }
}

tree.addEventListener('click', (events) => {
  const goin = events.target.tagName === 'SPAN';
  const hide = events.target.parentElement.children[1];

  if (goin) {
    hide.hidden = !hide.hidden;
  }
});
