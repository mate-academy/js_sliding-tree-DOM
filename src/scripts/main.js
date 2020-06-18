'use strict';

const list = document.querySelector('.tree');

function slidingTree(e) {
  const listItem = e.target.firstElementChild;

  if (listItem) {
    listItem.classList.toggle('hide');
  }
}

function hover(e) {
  if (e.target.firstElementChild) {
    e.target.classList.toggle('hovered');
  }
}

list.addEventListener('click', slidingTree);
list.addEventListener('mouseover', hover);
list.addEventListener('mouseout', hover);
