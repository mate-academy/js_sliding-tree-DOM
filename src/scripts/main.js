'use strict';

const tree = document.querySelector('ul.tree');

tree.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', (e) => {
    e.stopPropagation();

    const nested = li.querySelector(':scope > ul');

    if (nested && e.target !== 'null') {
      nested.style.display = nested.style.display === 'none' ? 'block' : 'none';
    }
  });
});
