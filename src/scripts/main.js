'use strict';

const root = document.querySelector('.tree');
const headers = [...document.querySelectorAll('li')];

headers.forEach(element => {
  if (element.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = element.firstChild.textContent;
    element.firstChild.replaceWith(span);
  }
});

root.addEventListener('click', (actualEvent) => {
  const item = actualEvent.target.parentNode.querySelector('ul');

  if (!item || !root.contains(item)) {
    return;
  }
  item.hidden = !item.hidden;
});
