'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const element = e.target;

  if (element.children.length > 0) {
    for (const child of element.children) {
      child.hidden = !child.hidden;
    }
  }
});
