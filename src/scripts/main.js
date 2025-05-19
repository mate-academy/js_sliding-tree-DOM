'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  // Обгортаємо текст у <span>
  const items = tree.querySelectorAll('li');

  items.forEach((li) => {
    const firstChild = li.firstChild;

    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = firstChild.textContent.trim();
      li.insertBefore(span, firstChild);
      li.removeChild(firstChild);
    }
  });

  // Додаємо клік
  tree.addEventListener('click', (ev) => {
    if (ev.target.tagName !== 'SPAN') {
      return;
    }

    const li = ev.target.closest('li');
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
