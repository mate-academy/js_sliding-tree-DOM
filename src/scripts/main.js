'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach((li) => {
  const nestedList = li.querySelector('ul');

  if (!nestedList) {
    return;
  }

  const textNode = Array.from(li.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();

  li.replaceChild(span, textNode);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const nestedList = li.querySelector('ul');

  if (!nestedList) {
    return;
  }

  nestedList.style.display = nestedList.style.display === 'none' ? '' : 'none';
});
