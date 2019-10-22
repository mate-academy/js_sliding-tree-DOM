'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (action) => {
  const children = action.target.parentElement.querySelector('ul');
  if (action.target.tagName === 'SPAN') {
    children.hidden = !children.hidden;
  }
});
