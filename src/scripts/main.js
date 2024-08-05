'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
