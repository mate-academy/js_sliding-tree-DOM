'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  const nestedList = Array.from(li.children).find(
    (child) => child.tagName === 'UL',
  );

  if (!nestedList) {
    return;
  }

  const titleNode = Array.from(li.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (!titleNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = titleNode.textContent.trim();
  titleNode.replaceWith(span);

  span.addEventListener('click', () => {
    nestedList.hidden = !nestedList.hidden;
  });
});
