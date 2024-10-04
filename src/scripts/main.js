'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.tree li');

  listItems.forEach((li) => {
    if (li.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = li.childNodes[0].textContent.trim();
      li.childNodes[0].replaceWith(span);

      // Add click event listener to the span
      span.addEventListener('click', () => {
        const childUl = li.querySelector('ul');

        if (childUl) {
          childUl.style.display =
            childUl.style.display === 'none' ? '' : 'none';
        }
      });
    }
  });
});
