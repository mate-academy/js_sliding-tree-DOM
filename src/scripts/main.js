'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const children = e.target.firstElementChild.children;

  for (const child of children) {
    if (!child.style.display) {
      child.style.display = 'none';
    } else {
      child.style.display = '';
    }
  }
});
