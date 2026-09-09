'use strict';

// write code here
const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const nestedList = li.querySelector(':scope > ul');

  if (!nestedList) {
    return;
  }

  const textNode = [...li.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  li.replaceChild(span, textNode);
});

tree.addEventListener('click', (e) => {
  const title = e.target;

  if (title.tagName !== 'SPAN') {
    return;
  }

  const nestedList = title.nextElementSibling;

  if (!nestedList || nestedList.tagName !== 'UL') {
    return;
  }

  nestedList.hidden = !nestedList.hidden;
});
