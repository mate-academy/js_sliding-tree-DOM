'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((li) => {
  const firstChild = li.firstChild;

  if (li.children.length && firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = firstChild.textContent.trim();
    li.insertBefore(span, firstChild);
    li.removeChild(firstChild);

    span.addEventListener('click', (ev) => {
      if (ev.target.tagName !== 'SPAN') {
        return;
      }

      const clickLi = ev.target.closest('li');
      const childUl = clickLi.querySelector('ul');

      if (childUl) {
        childUl.hidden = !childUl.hidden;
      }
    });
  }
});
