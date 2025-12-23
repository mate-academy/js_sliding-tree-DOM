'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const nestedList = li.querySelector('ul');

  if (!nestedList) {
    return;
  }

  let textNode = null;

  for (const node of li.childNodes) {
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

  li.replaceChild(span, textNode);

  nestedList.hidden = true;

  span.addEventListener('click', () => {
    nestedList.hidden = !nestedList.hidden;
  });
});
