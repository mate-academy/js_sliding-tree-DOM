'use strict';

const headers = document.querySelectorAll('.tree li:has(ul)');

headers.forEach((li) => {
  const text = li.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;
  li.replaceChild(span, li.firstChild);
});

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const nextEl = span.nextElementSibling;

    if (nextEl) {
      if (nextEl.style.display === 'none') {
        nextEl.style.display = 'block';
      } else {
        nextEl.style.display = 'none';
      }
    }
  });
});
