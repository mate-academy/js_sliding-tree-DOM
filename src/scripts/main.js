'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', () => {
  const listItem = event.target;

  const ul = listItem.parentElement.querySelector('ul');

  ul.hidden = !ul.hidden;
});
