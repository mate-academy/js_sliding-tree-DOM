'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (!e.target.children.length || e.target === tree) {
    return;
  }

  for (const item of e.target.children) {
    if (item.style.display === 'none') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});
