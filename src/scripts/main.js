'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const item of list) {
  if (item.firstElementChild && item.firstElementChild.tagName === 'UL') {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(item.childNodes[1]);
  }
}

tree.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childList = event.target.nextElementSibling;

  childList.hidden = !childList.hidden;
});
