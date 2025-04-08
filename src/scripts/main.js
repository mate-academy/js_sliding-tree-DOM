'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.querySelectorAll('li').forEach((li) => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const textNode = Array.from(li.childNodes).find(
        (node) =>
          node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
      );

      if (textNode) {
        const span = document.createElement('span');

        span.textContent = textNode.textContent.trim();
        textNode.parentNode.insertBefore(span, textNode);
        textNode.remove();

        childUl.style.display = 'block';

        span.addEventListener('click', () => {
          childUl.style.display =
            childUl.style.display === 'none' ? 'block' : 'none';
        });
      }
    }
  });
});
