'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');
  const list = document.querySelectorAll('.tree li');

  list.forEach((item) => {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent;
    item.firstChild.textContent = '';
    item.prepend(span);
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'span') {
      const nextEl = e.target.nextElementSibling;

      if (nextEl && nextEl.tagName.toLowerCase() === 'ul') {
        nextEl.hidden = !nextEl.hidden;
      }
    }
  });
});
