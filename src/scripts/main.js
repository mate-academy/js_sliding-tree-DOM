'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('mouseover', (e) => {
  if (checkTarget(e)) {
    e.target.style.fontWeight = 'bold';
    e.target.firstElementChild.style.fontWeight = 'normal';
  }
});

tree.addEventListener('mouseout', (e) => {
  if (checkTarget(e)) {
    e.target.style.fontWeight = 'normal';
  }
});

tree.addEventListener('click', (e) => {
  if (checkTarget(e)) {
    e.target.firstElementChild.classList.toggle('hidden');
  }
});

function checkTarget(e) {
  const target = e.target;
  const list = target.firstElementChild;

  return target.tagName === 'LI' && list;
}
