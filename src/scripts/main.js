'use strict';

const treeItems = document.querySelectorAll('li');

treeItems.forEach((li) => {
  const sublist = li.querySelector('ul');

  if (!sublist) {
    return;
  }

  let textNode = null;

  for (const node of li.childNodes) {
    if (
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.trim().length > 0
    ) {
      textNode = node;
      break;
    }
  }

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  li.insertBefore(span, textNode);
  li.removeChild(textNode);

  span.addEventListener('click', () => {
    sublist.hidden = !sublist.hidden;
  });
});
