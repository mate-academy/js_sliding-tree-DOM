'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const targetElment = e.target.firstElementChild;

  if (targetElment.tagName === 'UL') {
    targetElment.hidden = !targetElment.hidden;
  }
});
