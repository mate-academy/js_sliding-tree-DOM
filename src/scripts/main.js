'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const hide = (occasion) => {
  const list = occasion.target.parentNode.querySelector('ul');

  if (occasion.target.tagName !== 'SPAN') {
    return;
  }

  if (!list) {
    return;
  }

  list.hidden = !list.hidden;
};

tree.addEventListener('click', hide);
// write code here
