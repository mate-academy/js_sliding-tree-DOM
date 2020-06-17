'use strict';

const mainList = document.querySelector('.tree');

mainList.addEventListener('click', toggleList);

function toggleList(e) {
  const currentList = e.target;

  if (e.target.tagName !== 'LI' || !currentList.children[0]) {
    return;
  }

  if (currentList.children[0].hidden) {
    currentList.children[0].hidden = false;
  } else {
    currentList.children[0].hidden = true;
  }
}

mainList.addEventListener('mousemove', makeBold);

function makeBold(e) {
  const currentItem = e.target;

  if (e.target.tagName !== 'LI') {
    return;
  }

  currentItem.style.fontWeight = 'bold';
}

mainList.addEventListener('mouseout', makeNormal);

function makeNormal(e) {
  const currentItem = e.target;

  if (e.target.tagName !== 'LI') {
    return;
  }

  currentItem.style.fontWeight = 'normal';
}
