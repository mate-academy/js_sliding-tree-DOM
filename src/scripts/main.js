'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tree li').forEach((li) => {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span);

    span.addEventListener('click', () => {
      const sublist = li.querySelector('ul');

      if (sublist) {
        sublist.hidden = !sublist.hidden;
      }
    });
  });
});
