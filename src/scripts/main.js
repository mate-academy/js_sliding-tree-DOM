'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const list = e.target.querySelector('ul');

  if (e.target.tagName === 'LI' && list) {
    list.style.display = getComputedStyle(list).display === 'block'
      ? 'none'
      : 'block';
  }
});
