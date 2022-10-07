'use strict';

document.querySelector('.tree').addEventListener('click', (e) => {
  const child = e.target.children[0];

  if (child === undefined || e.target.localName === 'ul') {
    return;
  }

  child.style.display === 'none'
    ? child.style.display = 'block'
    : child.style.display = 'none';
});
