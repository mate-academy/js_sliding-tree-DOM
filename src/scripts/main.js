'use strict';

// write code here
const tree = document.querySelector('.tree');
const itemsList = document.querySelectorAll('li');

for (const item of [...itemsList]) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = e.target.parentNode.querySelector('ul');

  if (!childrenList) {
    return;
  }

  childrenList.hidden = !childrenList.hidden;
});
