'use strict';

// write code here
const tree = document.querySelector('.tree');

tree.addEventListener('click', event => {
  event.target.firstElementChild.classList.toggle('hidden');
});

tree.addEventListener('mouseover', event => {
  const subList = event.target.firstElementChild;

  if (event.target.tagName === 'LI' && subList) {
    event.target.style.fontWeight = 'bold';
    subList.style.fontWeight = 'normal';
  };
});

tree.addEventListener('mouseout', event => {
  const subList = event.target.firstElementChild;

  if (event.target.tagName === 'LI' && subList) {
    event.target.style.fontWeight = 'normal';
  };
});
