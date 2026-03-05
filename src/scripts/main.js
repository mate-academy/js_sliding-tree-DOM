'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tree li');

  items.forEach((li) => {
    const nodes = Array.from(li.childNodes);

    const textNodes = nodes.find(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim(),
    );

    if (!textNodes) {
      return;
    }

    const nextEl = textNodes.nextElementSibling;

    if (nextEl && nextEl.tagName === 'SPAN') {
      return;
    }

    const span = document.createElement('span');

    span.textContent = textNodes.textContent.trim();
    li.replaceChild(span, textNodes);
  });
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span || !tree.contains(span)) {
    return;
  }

  const li = span.closest('li');
  const subtree = li.querySelector('ul');

  if (!subtree) {
    return;
  }

  subtree.style.display = subtree.style.display === 'none' ? '' : 'none';
});
