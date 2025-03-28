'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    const childUl = li.querySelector('ul');

    if (!childUl) {
      return;
    }

    const text = li.firstChild.textContent.trim();
    const span = document.createElement('span');

    span.textContent = text;
    span.style.cursor = 'pointer';

    li.firstChild.textContent = '';
    li.insertBefore(span, childUl);

    span.addEventListener('click', () => {
      childUl.hidden = !childUl.hidden;
    });
  });
});
