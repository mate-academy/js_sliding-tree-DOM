'use strict';

const li = document.querySelectorAll('li');

for (const item of li) {
  const firstChild = item.firstChild;

  const span = document.createElement('span');

  span.append(firstChild);
  item.prepend(span);
}

const treeList = document.querySelector('.tree');

treeList.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName !== 'SPAN') {
    return;
  }

  const childList = clickEvent.target.parentNode.querySelector('ul');

  if (childList) {
    childList.hidden = !childList.hidden;
  }
});
