'use strict';

const mainList = document.querySelector('.tree');

mainList.addEventListener('click', toggleList);

function toggleList(e) {
  const currentList = e.target;

  currentList.firstElementChild.classList.toggle('hidden');
}

mainList.addEventListener('mousemove', makeBold);

function makeBold(e) {
  const currentItem = e.target;

  if (e.target.tagName === 'LI' && currentItem.children[0]) {
    currentItem.style.fontWeight = 'bold';
    e.target.firstElementChild.style.fontWeight = 'normal';
  }
}

mainList.addEventListener('mouseout', makeNormal);

function makeNormal(e) {
  const currentItem = e.target;

  if (e.target.tagName === 'LI' && currentItem.children[0]) {
    currentItem.style.fontWeight = 'normal';
  }
}
