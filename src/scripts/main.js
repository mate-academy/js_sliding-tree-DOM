'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', function(e) {
  e.target.firstElementChild.classList.toggle('hidden');
});

tree.addEventListener('mouseover', function(e) {
  const subList = e.target.firstElementChild;

  if (e.target.tagName === 'LI' && subList) {
    e.target.style.fontWeight = 'bold';
    subList.style.fontWeight = 'normal';
  };
});

tree.addEventListener('mouseout', function(e) {
  const subList = e.target.firstElementChild;

  if (e.target.tagName === 'LI' && subList) {
    e.target.style.fontWeight = 'normal';
  };
});
