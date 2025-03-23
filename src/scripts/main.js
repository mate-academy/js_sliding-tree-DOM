'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((li) => {
    const text = li.firstChild.textContent.trim();

    if (text) {
      const span = document.createElement('span');

      span.textContent = text;
      li.firstChild.replaceWith(span);
    }
  });

  document.querySelector('.tree').addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const parentLi = e.target.parentElement;
      const nestedUl = parentLi.querySelector('ul');

      if (nestedUl) {
        nestedUl.hidden = !nestedUl.hidden;
      }
    }
  });
});
