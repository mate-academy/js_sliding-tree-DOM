'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', ({target}) => {
  if (target.tagName !== 'LI' || !target.firstElementChild) {
    return;
  }

  const list = target.firstElementChild;

  list.style.display = getComputedStyle(list).display === 'block'
    ? 'none'
    : 'block'
})
