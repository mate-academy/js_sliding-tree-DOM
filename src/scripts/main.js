'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((li) => {
    const firstChild = li.firstChild;

    if (firstChild.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = firstChild.textContent.trim();
      firstChild.textContent = '';
      li.insertBefore(span, li.firstChild);
    }
  });

  document.querySelectorAll('.tree span').forEach((span) => {
    span.addEventListener('click', (e) => {
      const parentLi = span.parentElement;
      const childUl = parentLi.querySelector('ul');

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }

      e.stopPropagation();
    });
  });
});
