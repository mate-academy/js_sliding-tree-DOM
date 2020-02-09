'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ulContainer = e.target.parentNode.querySelector('ul');

  if (!ulContainer) {
    return;
  }

  ulContainer.hidden = !ulContainer.hidden;
});
