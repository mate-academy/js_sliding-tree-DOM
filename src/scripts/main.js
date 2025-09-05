'use strict';

const treeUl = document.querySelector('.tree');

treeUl.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const nested = li.querySelector('ul');

  if (nested) {
    nested.hidden = !nested.hidden;
  }
});
