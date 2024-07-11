'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((li) => {
  if (li.querySelector('ul')) {
    const originalText = li.firstChild.textContent;
    const span = document.createElement('span');

    span.textContent = originalText;
    li.firstChild.replaceWith(span);

    span.addEventListener('click', () => {
      const childUl = li.querySelector('ul');

      childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
    });
  }
});
