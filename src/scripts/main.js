'use strict';
/* eslint-disable */

const tree = document.querySelector('.tree');
tree.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (!targetElement.contains(targetElement.querySelector('ul'))) {
    return;
  }

  targetElement.querySelector('ul').hidden = !targetElement.querySelector('ul').hidden;
  targetElement.style.fontWeight = targetElement.style.fontWeight === 'bold' ? 'normal' : 'bold';

});
