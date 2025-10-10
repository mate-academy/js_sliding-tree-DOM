'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const ul = li.querySelector(':scope > ul');

  if (!ul) {
    return;
  }

  ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
});
