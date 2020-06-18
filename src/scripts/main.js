'use strict';

const tree = document.querySelector('.tree');

function slidingTree(e) {
  const item = e.target.firstElementChild;

  if (item) {
    item.classList.toggle('hide');
  }
}

function hover(e) {
  if (e.target.firstElementChild) {
    e.target.classList.toggle('hovered');
  }
}

tree.addEventListener('click', slidingTree);
tree.addEventListener('mouseover', hover);
tree.addEventListener('mouseout', hover);
