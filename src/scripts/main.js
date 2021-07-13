'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', () => {
  if (event.target.children.length === 1) {
    for (const li of event.target.children) {
      if (li.style.display !== 'none') {
        li.style.display = 'none';
      } else {
        li.style.display = 'block';
      }
    }
  }
});
