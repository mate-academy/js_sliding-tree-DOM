'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('ul').forEach((item) => {
  const li = item.parentNode;
  const childNodes = Array.from(li.childNodes);

  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent;
      li.replaceChild(span, node);

      const nextEl = span.nextElementSibling;

      if (!nextEl || nextEl.tagName.toLowerCase() !== 'ul') {
        return;
      }

      nextEl.style.display = 'block';

      span.addEventListener('click', (e) => {
        nextEl.style.display =
          nextEl.style.display === 'none' || nextEl.style.display === ''
            ? 'block'
            : 'none';
      });
    }
  });
});
