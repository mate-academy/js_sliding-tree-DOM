'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

function initHeaderList(items) {
  for (const item of items) {
    const itemFirstChild = item.firstElementChild;

    if (itemFirstChild && itemFirstChild.tagName === 'UL') {
      const span = document.createElement('span');

      item.prepend(span);
      span.append(item.childNodes[1]);
    }
  }
}

function clickListener(element) {
  element.addEventListener('click', event => {
    if (event.target.tagName !== 'SPAN') {
      return;
    }

    const childList = event.target.nextElementSibling;

    childList.hidden = !childList.hidden;
  });
}

initHeaderList(list);
clickListener(tree);
