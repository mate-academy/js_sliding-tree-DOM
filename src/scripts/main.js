'use strict';

const tree = document.querySelector('.tree');
const allListItems = tree.querySelectorAll('li');

for (const li of allListItems) {
  const textNode = li.firstChild;

  if (textNode && textNode.nodeType === 3) {
    const span = document.createElement('span');

    span.append(textNode);
    li.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenContainer = e.target.parentNode.querySelector('ul');

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
});
