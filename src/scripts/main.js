'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const childUl = li.querySelector('ul');

    if (!childUl) {
      return;
    }

    const textNode = [...li.childNodes].find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();

      li.insertBefore(span, textNode);
      li.removeChild(textNode);

      span.style.cursor = 'pointer';

      span.addEventListener('click', () => {
        childUl.hidden = !childUl.hidden;
      });
    }
  });
});
