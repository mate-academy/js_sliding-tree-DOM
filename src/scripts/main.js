'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  const wrapTextNodes = (element) => {
    element.childNodes.forEach((child) => {
      if (
        child.nodeType === Node.TEXT_NODE &&
        child.textContent.trim() !== ''
      ) {
        const span = document.createElement('span');

        span.textContent = child.textContent.trim();
        element.insertBefore(span, child);
        element.removeChild(child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        wrapTextNodes(child);
      }
    });
  };

  wrapTextNodes(tree);

  const spans = document.querySelectorAll('.tree span');

  spans.forEach((span) => {
    const nested = span.nextElementSibling;

    if (nested && nested.tagName === 'UL') {
      nested.style.display = 'none';
    }
  });

  spans.forEach((span) => {
    span.addEventListener('click', (e) => {
      const nested = span.nextElementSibling;

      if (nested && nested.tagName === 'UL') {
        nested.style.display =
          nested.style.display === 'none' ? 'block' : 'none';
      }

      e.stopPropagation();
    });
  });
});
