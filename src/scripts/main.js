/* eslint-disable no-useless-return */
'use strict';

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentUL = e.target.parentElement.querySelector('ul');

  if (parentUL) {
    parentUL.hidden = !parentUL.hidden;
  }
});
