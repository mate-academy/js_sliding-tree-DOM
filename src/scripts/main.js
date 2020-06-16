'use strict';

const tree = document.querySelector('.tree');

function closer(ev) {
  const item = ev.target.firstElementChild;

  if (item) {
    item.classList.toggle('hidden');
  }
}

function hovered(ev) {
  if (ev.target.firstElementChild) {
    ev.target.classList.toggle('hover');
  }
}

tree.addEventListener('click', closer);
tree.addEventListener('mouseover', hovered);
tree.addEventListener('mouseout', hovered);
