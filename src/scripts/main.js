'use strict';

const tree = document.querySelector('body .tree');

tree.addEventListener('click', (e) => {
  for (const child of e.target.children) {
    if (child.style.display === 'none') {
      child.style.display = 'block';
    } else {
      child.style.display = 'none';
    }
  }
});
