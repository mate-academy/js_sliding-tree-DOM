'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');
  const treeList = tree.querySelectorAll('li');

  treeList.forEach((li) => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const textNode = Array.from(li.childNodes).find(
        (node) =>
          node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
      );

      if (textNode) {
        const span = document.createElement('span');

        span.textContent = textNode.textContent.trim();
        textNode.replaceWith(span);

        span.style.cursor = 'pointer';

        span.addEventListener('click', () => {
          childUl.hidden = !childUl.hidden;
        });
      }
    }
  });
});
