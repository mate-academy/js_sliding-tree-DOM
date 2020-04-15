'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  const li = event.target.closest('li');

  if (!li) {
    return;
  }

  if (li.children.length) {
    const children = li.children[0];
    
    children.hidden = !children.hidden;
  }
});
