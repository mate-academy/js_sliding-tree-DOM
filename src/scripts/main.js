'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (!e.target.classList.contains('title')) {
    return;
  }

  const neighbor = e.target.nextElementSibling;

  if (neighbor.style.display === 'none') {
    neighbor.style.display = 'block';
  } else {
    neighbor.style.display = 'none';
  }
});
