'use strict';

// write code here

const headline = document.querySelectorAll('li');

for (const elem of headline) {
  if (elem.children.length > 0) {
    const textNode = [...elem.childNodes].find((node) => node.nodeType === 3);

    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    textNode.replaceWith(span);
  }
}

const spans = document.querySelectorAll('span');

for (const span of spans) {
  span.addEventListener('click', (events) => {
    const li = events.target.closest('li');
    const ul = li.lastElementChild;

    if (ul.hidden) {
      ul.hidden = false;
    } else {
      ul.hidden = true;
    }
  });
}
