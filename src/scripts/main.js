'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelectorAll('.tree li');

  tree.forEach((li) => {
    li.childNodes.forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE) {
        return;
      }

      const ul = node.nextElementSibling;

      if (!ul || ul.tagName !== 'UL') {
        return;
      }

      const text = node.nodeValue.trim();

      if (!text) {
        return;
      }

      const span = document.createElement('span');

      span.textContent = text;
      li.replaceChild(span, node);

      span.addEventListener('click', () => {
        if (!ul) {
          return;
        }

        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
      });
    });
  });
});
