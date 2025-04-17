'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.addEventListener('click', (e) => {
    // Перевірка, чи клік був по <span>
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const parentLi = e.target.closest('li');

    if (!parentLi) {
      return;
    }

    const childUl = parentLi.querySelector('ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
