'use strict';

// write code here
const list = document.querySelectorAll('li');
const span = document.createElement('span');

function handler(event) {
  const item = event.target.parentElement;

  if (item.children.length === 1) {
    return;
  }

  if (!item.children[1].hidden) {
    item.children[1].hidden = true;
  } else {
    item.children[1].hidden = false;
  }
}

for (const item of [...list]) {
  item.prepend(span.cloneNode(true));

  const element = item.querySelector('span');

  element.append(item.childNodes[1]);
  element.addEventListener('click', handler);
}
