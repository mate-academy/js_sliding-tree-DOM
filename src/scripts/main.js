'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tree li').forEach((item) => {
    const span = document.createElement('span');

    span.innerHTML = item.firstChild.nodeValue.trim();
    item.insertBefore(span, item.firstChild);
    item.firstChild.nextSibling.remove();

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      const children = item.querySelectorAll('ul > li');

      if (children.length > 0) {
        children.forEach((child) => {
          child.style.display =
            child.style.display === 'none' ? 'block' : 'none';
        });
      }
    });
  });
});
