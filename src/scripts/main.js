'use strict';

const tree = document.querySelector('.tree');

function removeChildrenHandler() {
  const children = event.target.children[0].children;

  for (const key of children) {
    if (key.nodeName === 'LI') {
      key.classList.toggle('tree__toggle');
    }
  }
}

tree.addEventListener('click', removeChildrenHandler);
