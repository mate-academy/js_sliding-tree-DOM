'use strict';

const tree = document.querySelector('.tree');

function closer(ev) {
  const item = ev.target.firstElementChild;

  if (item) {
    item.classList.toggle('hidden');
  }
}

function hover(ev) {
  if (ev.target.firstElementChild) {
    ev.target.classList.toggle('hovered');
  }
}

tree.addEventListener('click', closer);
tree.addEventListener('mouseover', hover);
tree.addEventListener('mouseout', hover);
