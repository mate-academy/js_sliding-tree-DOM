'use strict';

const itemListTree = document.querySelectorAll('.tree li');

itemListTree.forEach((li) => {
  const firstNode = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );
  // const ul = li.querySelector('ul');

  if (firstNode) {
    const span = document.createElement('span');

    span.textContent = firstNode.textContent;
    li.insertBefore(span, firstNode);
    li.removeChild(firstNode);
  }

  // if (ul) {
  // ul.style.display = 'none';
  // }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const next = e.target.nextElementSibling;

    if (next && next.tagName === 'UL') {
      next.style.display = next.style.display === 'none' ? 'block' : 'none';
    }
    e.stopPropagation();
  }
});
