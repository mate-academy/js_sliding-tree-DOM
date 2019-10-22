'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', (action) => {
  const ul = action.target.parentElement.querySelector('ul');
  ul.hidden = !ul.hidden;
});
