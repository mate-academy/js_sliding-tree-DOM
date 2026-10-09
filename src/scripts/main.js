/* eslint-disable no-shadow */
'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const textNode = item.firstChild;

  if (!textNode || textNode.nodeType !== Node.TEXT_NODE) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent;

  item.replaceChild(span, textNode);
});

tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const nestedList = event.target.parentElement.querySelector('ul');

  if (!nestedList) {
    return;
  }

  nestedList.hidden = !nestedList.hidden;
});
