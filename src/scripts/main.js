'use strict';

const tree = document.querySelector('.tree');

const closer = (e) => {
  const item = e.target.firstElementChild;

  if (item) {
    item.classList.toggle('closer');
  }
};

const hover = (e) => {
  if (e.target.firstElementChild) {
    e.target.classList.toggle('hover');
  }
};

tree.addEventListener('click', closer);
tree.addEventListener('mouseover', hover);
tree.addEventListener('mouseout', hover);
