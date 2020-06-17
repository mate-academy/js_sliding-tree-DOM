'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const item = e.target.firstElementChild;

  if (item) {
    item.classList.toggle('hidden');
  }
});

function hover(e) {
  if (e.target.firstElementChild) {
    e.target.classList.toggle('hovered');
  }
}

tree.addEventListener('mouseover', hover);
tree.addEventListener('mouseout', hover);
