'use strict';

const itemsWithNestedChildren = document.querySelectorAll('li:has(ul)');

itemsWithNestedChildren.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    const nestedChild = item.querySelector('ul');

    if (nestedChild) {
      nestedChild.style.display =
        nestedChild.style.display === 'none' ? 'block' : 'none';
    }
  });
});
