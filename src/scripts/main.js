'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const span = document.createElement('span');

  const textNodes = [];

  item.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      textNodes.push(node);
    }
  });

  textNodes.forEach((node) => {
    span.appendChild(node);
  });

  item.insertBefore(span, item.firstChild);

  span.addEventListener('click', (e) => {
    const subtree = e.currentTarget.nextElementSibling;

    if (!subtree) {
      return;
    }

    if (subtree.style.display === 'none') {
      subtree.style.display = 'block';
    } else {
      subtree.style.display = 'none';
    }
  });
});
