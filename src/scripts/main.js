'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);

  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const nestedList = e.target.parentNode.querySelector('ul');

  if (!nestedList) {
    return;
  }

  nestedList.hidden = !nestedList.hidden;
});
