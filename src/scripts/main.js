'use strict';

const list = document.querySelector('.tree');

function listHider() {
  const item = event.target.firstElementChild;

  if (item) {
    item.classList.toggle('hidden');
  }
}

function fontWeightChanger() {
  if (event.target.firstElementChild) {
    event.target.classList.toggle('hover');
  }
}

list.addEventListener('click', listHider);
list.addEventListener('mouseover', fontWeightChanger);
list.addEventListener('mouseout', fontWeightChanger);
