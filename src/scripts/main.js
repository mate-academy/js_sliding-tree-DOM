'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  childUl.hidden = !childUl.hidden;
});
