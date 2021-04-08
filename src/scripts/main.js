'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', e => {
  const item = e.target;

  if (item.tagName !== 'LI') {
    return;
  }
  item.children[0].hidden = !item.children[0].hidden;
});
