'use strict';

const mainList = document.querySelector('.tree');

function hoverTitle(e) {
  if (e.target.firstElementChild) {
    e.target.classList.toggle('hover');
  }
}

function listItemToggle(e) {
  const listItem = e.target.firstElementChild;

  if (listItem) {
    listItem.classList.toggle('hidden');
  }
}

mainList.addEventListener('click', listItemToggle);
mainList.addEventListener('mouseover', hoverTitle);
mainList.addEventListener('mouseout', hoverTitle);
