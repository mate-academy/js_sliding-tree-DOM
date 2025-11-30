'use strict';

const allLi = document.querySelectorAll('li');

allLi.forEach((li) => {
  [...li.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent;

      node.replaceWith(span);
    }
  });

  li.firstElementChild.addEventListener('click', (ev) => {
    const targetLi = ev.target.closest('li');

    ev.stopPropagation();

    const innerULs = [...targetLi.children].filter(
      (child) => child.tagName === 'UL',
    );

    innerULs.forEach((ul) => {
      if (ul.style.display === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
    });
  });
});
