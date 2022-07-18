'use strict';

const list = document.querySelector('.tree');
const listElements = document.querySelectorAll('li');

for (const item of listElements) {
  if (item.children.length) {
    const spanWrapper = document.createElement('span');

    item.prepend(spanWrapper);
    spanWrapper.append(spanWrapper.nextSibling);
  }
}

list.addEventListener('click', e => {
  const targetItem = e.target.closest('span').nextSibling;

  targetItem.hidden = !targetItem.hidden;
});
