'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((li) => {
  const firstLi = li.firstChild;

  if (li.children.length && firstLi.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = firstLi.textContent.trim();

    li.insertBefore(span, firstLi);
    li.removeChild(firstLi);

    span.addEventListener('click', (e) => {
      if (e.target.tagName !== 'SPAN') {
        return;
      }

      const clickLi = e.target.closest('li');
      const childUl = clickLi.querySelector('ul');

      if (childUl) {
        childUl.hidden = !childUl.hidden;
      }
    });
  }
});
