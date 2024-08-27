'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tree li').forEach((li) => {
    if (li.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = li.childNodes[0].textContent.trim();
      li.childNodes[0].replaceWith(span);
    }
  });

  document.querySelectorAll('.tree span').forEach((span) => {
    span.addEventListener('click', function () {
      const childUl = this.nextElementSibling;

      if (childUl) {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
});
