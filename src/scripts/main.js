'use strict';

const listElements = document.querySelectorAll('li:has(ul)');

listElements.forEach((item) => {
  const childNodes = Array.from(item.childNodes);

  const textNode = childNodes.find(
    (node) => node.nodeType === 3 && node.textContent.trim() !== '',
  );

  if (textNode) {
    const spanTitle = document.createElement('span');

    spanTitle.textContent = textNode.textContent.trim();

    item.replaceChild(spanTitle, textNode);
  }
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
  } else {
    const eventList = e.target.parentElement;

    const nestedList = eventList.querySelector('ul');

    if (!nestedList) {
      return;
    }

    const isVisible = getComputedStyle(nestedList).display !== 'none';

    nestedList.style.display = isVisible ? 'none' : 'block';
  }
});
