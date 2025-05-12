'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('li').forEach((li) => {
    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      const textNode = Array.from(li.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
      );

      if (textNode) {
        const span = document.createElement('span');

        span.textContent = textNode.textContent.trim();
        span.style.cursor = 'pointer';

        li.insertBefore(span, textNode);
        li.removeChild(textNode);

        childUl.style.display = 'none';

        span.addEventListener('click', () => {
          childUl.style.display =
            childUl.style.display === 'none' ? 'block' : 'none';
        });
      }
    }
  });
});
