'use strict';

const tree = document.querySelector('.tree');
const headers = tree.querySelectorAll('li');

headers.forEach((header) => {
  let textNode = null;

  for (const node of header.childNodes) {
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
  header.firstChild.replaceWith(span);
});

const newSpan = tree.querySelectorAll('span');

newSpan.forEach((span) => {
  const next = span.nextElementSibling;

  if (next && next.tagName === 'UL') {
    span.addEventListener('click', () => {
      next.hidden = !next.hidden;
    });
  }
});
