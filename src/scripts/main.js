'use strict';

const items = document.querySelectorAll('li');

items.forEach((element) => {
  const childList = element.querySelector(':scope > ul');

  if (!childList) {
    return;
  }

  let textNode = null;

  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      textNode = node;
      break;
    }
  }

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  textNode.replaceWith(span);

  span.addEventListener('click', (e) => {
    e.stopPropagation();
    childList.hidden = !childList.hidden;
  });
});
