'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((li) => {
    if (li.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = li.firstChild.textContent.trim();
      li.firstChild.replaceWith(span);

      span.addEventListener('click', () => {
        const childUl = li.querySelector('ul');

        childUl.hidden = !childUl.hidden;
      });
    }
  });
});
