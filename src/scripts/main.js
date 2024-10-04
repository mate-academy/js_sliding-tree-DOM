'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((item) => {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(span);
  });

  const spans = document.querySelectorAll('.tree span');

  spans.forEach((span) => {
    span.addEventListener('click', (ev) => {
      ev.stopPropagation();

      const parentLi = span.parentElement;
      const childUl = parentLi.querySelector('ul');

      if (childUl) {
        if (childUl.style.display === 'none') {
          childUl.style.display = '';
        } else {
          childUl.style.display = 'none';
        }
      }
    });
  });
});
