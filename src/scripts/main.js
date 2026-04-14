'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const textNode = li.firstChild;

      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        const span = document.createElement('span');

        span.textContent = textNode.textContent.trim();
        li.insertBefore(span, childUl);
        li.removeChild(textNode);

        span.addEventListener('click', () => {
          childUl.hidden = !childUl.hidden;
        });
      }
    }
  });
});
