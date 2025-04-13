'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  tree.querySelectorAll('li').forEach(li => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const textNode = Array.from(li.childNodes).find(
        (node) =>
          node.nodeType === Node.TEXT_NODE &&
          node.textContent.trim().length > 0,
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
