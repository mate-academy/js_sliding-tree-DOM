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
  const headerChild = eventClick.target.nextSibling;

  if (headerChild) {
    headerChild.hidden = !headerChild.hidden;
  }
});
