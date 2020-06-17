'use strict';

const tree = document.querySelector('.tree');

function closer(action) {
  const element = action.target.firstElementChild;

  if (element) {
    element.classList.toggle('closed-tree');
  }
}

function hover(action) {
  if (action.target.firstElementChild) {
    action.target.classList.toggle('hovered-text');
  }
}

tree.addEventListener('click', closer);
tree.addEventListener('mouseover', hover);
tree.addEventListener('mouseout', hover);
