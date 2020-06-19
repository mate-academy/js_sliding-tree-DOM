'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', item => {
  item.target.firstElementChild.classList.toggle('hidden');
});

function hoverAdd(item) {
  item.target.style.fontWeight = 'bold';
  item.target.child.style.fontWeight = 'normal';
}

function hoverRemove(item) {
  item.target.style.fontWeight = 'normal';
}

list.addEventListener('mouseover', hoverAdd);
list.addEventListener('mouseout', hoverRemove);
