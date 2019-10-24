'use strict';
const tree = document.querySelector('.tree');

function hide(action) {
  const child = action.target.parentElement.children[1];
  if (child.tagName === 'UL') {
    child.hidden = !child.hidden;
  }
}

tree.addEventListener('click', hide);
