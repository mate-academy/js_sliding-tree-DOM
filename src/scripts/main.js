'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const li = e.target;
  const childUL = li.querySelector('ul');

  childUL.style.display = childUL.style.display === 'none' ? 'block' : 'none';
});
