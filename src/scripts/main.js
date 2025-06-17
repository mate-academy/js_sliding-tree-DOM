'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((li) => {
    if (li.querySelector('ul')) {
      let textNode = null;

      li.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
          textNode = node;
        }
      });

      if (textNode) {
        const span = document.createElement('span');

        span.textContent = textNode.nodeValue.trim();
        textNode.replaceWith(span);

        span.addEventListener('click', () => {
          const childUl = li.querySelector('ul');

          childUl.hidden = !childUl.hidden;
        });
      }
    }
  });
});
