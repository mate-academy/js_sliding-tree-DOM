'use strict';

const tree = document.querySelectorAll('.tree > li > ul > li');

tree.forEach((li) => {
  const ul = li.querySelector('ul');

  const firstNode = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (ul && firstNode) {
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
