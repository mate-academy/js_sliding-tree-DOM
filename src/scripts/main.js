'use strict';

const list = document.querySelector('.tree');
const listItem = document.querySelectorAll('li');

listItem.forEach(item => {
  const spanWrapper = document.createElement('span');

  item.insertAdjacentElement('afterbegin', spanWrapper);
  spanWrapper.prepend(spanWrapper.nextSibling);
});

list.addEventListener('click', (e) => {
  const element = e.target.closest('span');
  const elementChildren = element.nextSibling;

  if (!element || !list.contains(element)) {
    return;
  }

  if (!elementChildren.hidden) {
    elementChildren.hidden = true;
  } else {
    elementChildren.hidden = false;
  }
});
