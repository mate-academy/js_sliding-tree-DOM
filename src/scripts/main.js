'use strict';

const tree = document.querySelector('.tree');
const elementTree = tree.querySelectorAll('li');

for (const element of elementTree) {
  if (element.children.length > 0) {
    const span = document.createElement('span');

    element.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (eventClick) => {
  if (!eventClick.target.nextSibling || eventClick.target.tagName !== 'SPAN') {
    return;
  }

  eventClick.target.nextSibling.hidden = !eventClick.target.nextSibling.hidden;
});
