'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((item) => {
  const nestedList = item.querySelector('ul');

  if (!nestedList) {
    return;
  }

  const textNode = [...item.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  item.replaceChild(span, textNode);

  span.addEventListener('click', () => {
    nestedList.hidden = !nestedList.hidden;
  });
});
