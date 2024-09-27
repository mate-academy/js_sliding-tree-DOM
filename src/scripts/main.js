'use strict';

const list = document.querySelectorAll('li');

for (const item of list) {
  const spanElement = document.createElement('span');

  item.prepend(spanElement);
  spanElement.append(spanElement.nextSibling);
}

const treeElement = document.querySelector('.tree');

treeElement.addEventListener('click', eventFunc => {
  const item = eventFunc.target.closest('li').children[1];

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
});
