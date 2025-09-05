'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');
  const title = tree.querySelectorAll('li');

  // оборачиваем текст в <span>
  title.forEach((li) => {
    const firstChild = li.firstChild;

    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
      const createSpan = document.createElement('span');

      createSpan.textContent = firstChild.textContent.trim();
      li.replaceChild(createSpan, firstChild);
    }
  });

  document.querySelectorAll('.tree span').forEach((span) => {
    span.addEventListener('click', () => {
      const next = span.nextElementSibling;

      if (next) {
        next.hidden = !next.hidden;
      }
    });
  });
});
