'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  item.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.trim();

      const span = document.createElement('span');

      span.className = 'listHead';
      span.textContent = text;

      node.parentNode.insertBefore(span, node);
      node.remove();
    }
  });
});

document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('listHead')) {
    const next = target.nextElementSibling;

    if (next.style.display === 'none') {
      next.style.display = 'block';
    } else {
      next.style.display = 'none';
    }
  }
});
