'use strict';

const tree = document.querySelector('.tree');

function toggleMenu(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const list = e.target.parentElement.querySelector('ul');

  list.hidden = !list.hidden;
};

tree.addEventListener('click', toggleMenu);
