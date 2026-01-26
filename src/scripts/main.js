'use strict';

const allLi = document.querySelectorAll('li');

allLi.forEach((li) => {
  if (li.querySelector('ul')) {
    li.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const span = document.createElement('span');

        span.textContent = node.textContent;
        node.replaceWith(span);

        span.addEventListener('click', (e) => {
          const targetList = e.target.closest('li');
          const targetChildren = targetList.querySelector('ul');

          if (targetChildren.style.display === 'none') {
            targetChildren.style.display = 'block';
          } else {
            targetChildren.style.display = 'none';
          }
        });
      }
    });
  }
});

